<!doctype html>
<html>
<head>
<title>Our Funky HTML Page</title>
<meta name="description" content="Our first page">
<meta name="keywords" content="html tutorial template">
</head>
<body>
<div class="demo">
  <ul>
    <li>
       <img src="https://www.jqueryscript.net/small/images/jQuery-Plugin-To-Expand-Collapse-Input-Field-Expandable-Input.jpg" alt="Expandable Input" />
       <a href="https://www.jqueryscript.net/form/jQuery-Plugin-To-Expand-Collapse-Input-Field-Expandable-Input.html">Expandable Input</a>
       <p>Expandable Input is a minimal jQuery plugin to smoothly expand the width of a input filed when focused/clicked and collapse it when lose focus.</p>
    </li>
    <li class="odd">
       <img src="https://www.jqueryscript.net/small/images/Creating-A-Full-Page-Photo-<a href="https://www.jqueryscript.net/gallery/">Gallery</a>-with-jQuery-Photor-Plugin.jpg" alt="jQuery Photor Plugin" />
       <a href="https://www.jqueryscript.net/gallery/Creating-A-Full-Page-Photo-Gallery-with-jQuery-Photor-Plugin.html">jQuery Photor Plugin</a>
       <p>Photor is a fast and easy jQuery plugin to create a responsive & touch-friendly full page image gallery with CSS3 transitions and transforms.</p>
    </li>
    <li>
       <img src="https://www.jqueryscript.net/small/images/Windows-8-Style-jQuery-Data-Table-Decorator-Metreaux-Tables.jpg" alt="Metreaux Tables" />
       <a href="https://www.jqueryscript.net/table/Windows-8-Style-jQuery-Data-Table-Decorator-Metreaux-Tables.html">Metreaux Tables</a>
       <p>Metreaux Tables is a jQuery plugin to create nice, clean, themeable, andmodern Windows 8 UI Style data tables with the power of DataTables jQuery javascript library.</p>
    </li>
    ...
  </ul>

</div>
<script>
$(function(){
  $('.demo').easyTicker();
});
$('.demo').easyTicker({

  // or 'down'
  direction: 'up',

  // easing function
  easing: 'swing',

  // animation speed
  speed: 'slow',

  // animation delay
  interval: 2000,

  // height
  height: 'auto',

  // the number of visible elements of the list
  visible: 0,

  // enables pause on hover
  mousePause: 1,

  // custom controls
  controls: {
    up: '',
    down: '',
    toggle: '',
    playText: 'Play',
    stopText: 'Stop'
  },

  // callbacks
  callbacks: {
    before: function(ul, li){
      // do something
    },
    after: function(ul, li){
      // do something
    }
  }
  
});
</script>
</body>
</html>