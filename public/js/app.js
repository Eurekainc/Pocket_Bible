// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function() {
 

  /* ---------------------------------- Local Variables ---------------------------------- */

  BookListView.prototype.template = Handlebars.compile(
    $("#book-list-tpl").html()
  );
  ChapterListView.prototype.template = Handlebars.compile(
    $("#chapter-list-tpl").html()
  );
  ChapterView.prototype.template = Handlebars.compile($("#chapter-tpl").html());
  HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
  PageView.prototype.template = Handlebars.compile($("#page-tpl").html());
  EbookView.prototype.template = Handlebars.compile($("#ebook-tpl").html());
  var slider = new PageSlider($("body"));
  var service = new BibleService();
  var page = new PageService();

  service.initialize().done(function() {
    router.addRoute("", function() {
      console.log ('route is blank')
      page.findFile("opening").done(function(page) {
        slider.slidePage(new HomeView(page).render().$el);
      });
      $(".right, .left").remove();
    });

    router.addRoute("bible", function() {
      service.findAllBooks().done(function(books) {
        var booksList = new BookListView(books).render().$el;
        slider.slidePage(booksList);
        console.log ('route is bible')
        // Cleaning up: remove old pages that were moved out of the viewport
        $(".right, .left").remove();
      });
    });
    router.addRoute("book/:id", function(id) {
      service.findBookById(parseInt(id)).done(function(book) {
        var chart = service.chapterTable(book);
        var chaptersList = new ChapterListView(chart).render().$el;
        slider.slidePage(chaptersList);
      });
      $(".bar-header-secondary").remove();
      $(".bar.bar-standard.bar-footer").remove();
      $(".bar.bar-footer.network").remove();
    });
    router.addRoute("chapter/:id", function(id) {
      service.findChapterById(id).done(function(chapter) {
        var chapterContent = new ChapterView(chapter).render().$el;
        slider.slidePage(chapterContent);
      });
      $(".bar-header-secondary").remove();
      $(".bar.bar-standard.bar-footer").remove();
      $(".bar.bar-footer.network").remove();
    });
    router.addRoute("newcreation", function() {
      localStorage.removeItem("ebookChapter");
      page.findFile("basic").done(function(page) {
        slider.slidePage(new EbookView(page).render().$el);
      });
      $(".right, .left").remove();
    });
    router.addRoute("newchapter/:id", function(id) {
      localStorage.setItem("ebookChapter", id);
      page.findFile("basic").done(function(page) {
        slider.slidePage(new EbookView(page).render().$el);
      });
      $(".right, .left").remove();
    });
    router.addRoute("principles", function() {
      page.findFile("principles").done(function(page) {
        slider.slidePage(new PageView(page).render().$el);
      });
      $(".right, .left").remove();
    });
    router.start();
  });

  /* --------------------------------- Event Registration -------------------------------- */

  $(window).on("hashchange", $.proxy(this.route, this));

  /* ---------------------------------- Local Functions ---------------------------------- */
})();
