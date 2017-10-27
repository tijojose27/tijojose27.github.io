
$(document).ready(function() {
  //DESCRIPTION OF THE WEBSITES MUST BE PLACED HERE
  //AND IN ORDER
  var sites = [
    "Top News app with New York Times api : https://codepen.io/tijojose27/pen/yzpvqG",
    "Weather app with location from browser and weather api : https://codepen.io/tijojose27/pen/eGEeyy",
    "Quotes app with random quotes from api : https://codepen.io/tijojose27/pen/KXvNLz",
    "Layover made for a sales website : https://codepen.io/tijojose27/pen/yYPEEZ"
  ]
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  $('#Projects img').click(function(e) {
    e.preventDefault();
    var alt = $(this).attr('alt');
    var src = $(this).attr('src');
    $(".modal-title").html(alt);
    $("#modal-img").attr('src', src);
    var index = $("img").index(this);
    --index;
    var info = "";
    switch (index) {
      case 0:
        info = sites[index]
        break;
      case 1:
        info = sites[index]
        break;
      case 2:
        info = sites[index]
        break;
      case 3:
        info = sites[index]
        break;
      default:
        info = "";
    }
    $("#modal-info").html(info);
    $("#imgModal").modal();
  });

  $('.myIcons').hover(function(){
    var item = this;
    $(item).children('.hid-contact').fadeOut( 500, function(){
      $(item).children('.show-contact').fadeIn(1000);
    });
  });

});
