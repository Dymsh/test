
$(document).ready(function(){

  $('.btn').on('click', function (){

    if ($('.block').length) {
      $('.block').remove();

    }else {

      var el = $(document.createElement('div'));
      el.addClass('block').html('its new block here');
      el.appendTo('body');
    }

  });

});
