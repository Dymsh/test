<!DOCTYPE html>
<html dir = 'ltr'>

<head>
  <meta charset="UTF-8">
  <title>test</title>
  <link href="css/style.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- <script src="js/jquery-3.2.1.min.js"></script> -->
  <!-- <script src="js/jquery.custom-scrollbar.js"></script> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="http://yui.yahooapis.com/3.18.1/build/yui/yui-min.js"></script>
  <!-- <script src="js/btn.js"></script> -->
</head>
<body>


<div class = "menu__wrapper">
  <ul class = "menu">
    <li>first</li>
    <li>second</li>
    <li>third</li>
    <li>fourth</li>
    <li>fifth</li>
  </ul>
</div>

<script>

$('.menu li').mousedown(function(){
  // 1 prepearing for drug
  var item = this;
  $(item).css({
    'position':'absolute',
    'width': '300px'
  });

  function moveAt(e) {
    item.style.left = e.pageX + 'px';
    item.style.top = e.pageY + 'px';
  }

  document.onmousemove = function(e){
    moveAt(e)
  };


});


</script>
</body>
</html>
