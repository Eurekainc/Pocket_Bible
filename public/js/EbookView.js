var EbookView = function(page) {
    
	this.initialize = function() {
		this.$el = $('<div/>');
		// from https://github.com/futurepress/epub.js/tree/master/documentation
		//https://github.com/futurepress/epub.js/blob/master/documentation/README.md
		Book = ePub("files/newcreation.epub", {spreads:false, restore:true}); //this works well.
		//Book = ePub("files/test/prayer.html", {spreads:false, restore:true});
		//Book = ePub("files/ebook/content.opf", {spreads:false, restore:true}); Could not load book at: META-INF/container.xml
		//Book = ePub("files/ebook", {spreads:false, restore:true}); 
		EPUBJS.Hooks.register('beforeChapterDisplay').swipeDetection = function (callback, renderer) {
			var script = renderer.doc.createElement('script');
			script.text = "!function(a,b,c){function f(a){d=a.touches[0].clientX,e=a.touches[0].clientY}function g(f){if(d&&e){var g=f.touches[0].clientX,h=f.touches[0].clientY,i=d-g,j=e-h;Math.abs(i)>Math.abs(j)&&(i>a?b():i<0-a&&c()),d=null,e=null}}var d=null,e=null;document.addEventListener('touchstart',f,!1),document.addEventListener('touchmove',g,!1)}";
			/* (threshold, leftswipe, rightswipe) */
			script.text += "(10,function(){parent.ePubViewer.Book.nextPage()},function(){parent.ePubViewer.Book.prevPage()});"
			renderer.doc.head.appendChild(script);
			if (callback) {
				callback();
			}
		};
	};

	this.render = function() {
		
		var content = this.template(page);
		this.$el.html(content);
		return this;
	};
	

	this.initialize();


}
function EbookNextPage(){
	Book.on('renderer:locationChanged', function(locationCfi){
		// store last for return
		var last = 	localStorage.getItem('ebookLocation', '');
		localStorage.setItem('ebookLocationLast', last);
		localStorage.setItem('ebookLocation', locationCfi);
	//	alert (locationCfi  + ' in next');
		
	});
	localStorage.removeItem('ebookIndex');
	
	Book.nextPage(); // goes to EPUBJS.Book.prototype.nextPage
	
	
}
function EbookPrevPage(){
	Book.on('renderer:locationChanged', function(locationCfi){
		localStorage.setItem('ebookLocation', locationCfi);
		
	});
	localStorage.removeItem('ebookIndex');
	Book.prevPage();
	
}
function EbookIndex(){
	localStorage.setItem('ebookIndex', 'True');
	Book.goto('epubcfi(/6/4[toc]!/4/2/1:0)');
	
}

function EbookNote(note){
	localStorage.setItem('ebookLocationReturn', localStorage.getItem('ebookLocation', ''));
	location['href'] = window[note];
}


function EbookReturn(){
	var location = localStorage.getItem('ebookLocationReturn');
//	alert (location + ' in return');
	Book.goto(location);
}