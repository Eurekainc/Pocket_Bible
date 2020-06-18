<!DOCTYPE html>
<html>
<head>
    <meta http-equiv=“Expires” content=”-1″>
    <meta charset="utf-8"/>
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />
    <link rel="apple-touch-icon" sizes="57x57" href="{{asset('icons/apple-touch-icon-57x57.png')}}')}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{asset('icons/apple-touch-icon-60x60.png')}}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{asset('icons/apple-touch-icon-72x72.png')}}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('icons/apple-touch-icon-76x76.png')}}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{asset('icons/apple-touch-icon-114x114.png')}}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{asset('icons/apple-touch-icon-120x120.png')}}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{asset('icons/apple-touch-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('icons/apple-touch-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('icons/apple-touch-icon-180x180.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('icons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('icons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('site.manifest')}}">
    <link rel="mask-icon" href="{{asset('icons/safari-pinned-tab.svg" color="#09716a')}}">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('ratchet/css/ratchet.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/newcreation.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/basic.css') }}" rel="stylesheet"/>
</head>
<script type="text/javascript">
    window.onload = function () {
        document.addEventListener("deviceready", init, false);
        init();
    };

    function init() {
    }
</script>
<body>
<script id="home-tpl" type="text/template">
    <header class="bar bar-nav nav-front">
        <a href="#"><img class="nav-front" src="{{ asset('files/images/NavFront.png')}}"></a>
    </header>
    <div class="content blue">
        @{{{text}}}
    </div>
</script>

<script id="ebook-tpl" type="text/template">
    <header class="bar bar-nav nav-path">
        <a href="#"><img class="nav-path" src="{{ asset('files/images/NavPath.png') }}"></a>
    </header>
    <div class="content">
        @{{{text}}}
    </div>
</script>

<script id="page-tpl" type="text/template">
    <header class="bar bar-nav nav-back">
        <a href="#"><img class="nav-back" src="{{ asset('files/images/NavPrinciples.png') }}"></a>
    </header>
    <div class="content">
        @{{{text}}}
    </div>
</script>

<script id="book-list-tpl" type="text/template">
    <header class="bar bar-nav nav-bible">
        <a href="#"><img class="nav-bible" src="{{ asset('files/images/NavBibleBack.png')}}"></a>
    </header>
    <div class="content">
        <h2 class="brown select-book ml-10">Select Book</h2>
        <ul class="table-view">
            @{{#each this}}
            <li class="table-view-cell bible-book">
                <a class="table-link  bible-book" href="#book/@{{bid}}">
                    @{{book_name}}
                </a>
            </li>
            @{{/each}}
        </ul>
    </div>
</script>

<script id="chapter-list-tpl" type="text/template">
    <header class="bar bar-nav nav-bible">
        <a href="#bible"><img class="nav-bible" src="{{ asset('files/images/NavBibleBack.png') }}"></a>
    </header>
    <div class="content bible-chapter-list">
        @{{{this}}}
        <br>
    </div>
</script>

<script id="chapter-tpl" type="text/template">
    <header class="bar bar-nav nav-bible">
        <a href="#bible"><img class="nav-bible" src="{{ asset('files/images/NavBibleBack.png')}}"></a>
    </header>
    <div class="content">
        <p class="chapter_spacer"></p>
        @{{{this}}}
        <br>
        <hr>
    </div>
</script>

<script src="{{ asset('lib/jquery.js')}}"></script>
<script src="{{ asset('js/epub/build/libs/zip.min.js')}}"></script>
<script src="{{ asset('js/epub/build/libs/jszip-utils.min.js')}}"></script>
<script src="{{ asset('lib/router.js')}}"></script>
<script src="{{ asset('lib/pageslider.js')}}"></script>
<script src="{{ asset('lib/fastclick.js')}}"></script>
<script src="{{ asset('lib/handlebars.js')}}"></script>
<script src="{{ asset('js/services/BibleService.js')}}"></script>
<!-- <script src="{{ asset('js/services/NoteService.js')}}"></script> -->
<script src="{{ asset('js/services/PageService.js')}}"></script>
<script src="{{ asset('js/BookListView.js')}}"></script>
<script src="{{ asset('js/ChapterListView.js')}}"></script>
<script src="{{ asset('js/ChapterView.js')}}"></script>
<script src="{{ asset('js/EbookView.js')}}"></script>
<script src="{{ asset('js/HomeView.js')}}"></script>
<script src="{{ asset('js/PageView.js')}}"></script>
<script src="{{ asset('js/ShareSend.js')}}"></script>
<!-- <script src="{{ asset('js/ShowMenu.js')}}"></script> -->
<script src="{{ asset('js/app.js')}}"></script>
<script src="{{ asset('js/epub/build/epub.js')}}"></script>
</body>
</html>
