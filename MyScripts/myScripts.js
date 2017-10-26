$(document).ready(function () {
    $('body').scrollspy({
        target: "#navScrollspy"
    });

    var scrollLink = $('.scroll');
    
    scrollLink.click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        var loc = $(this).scrollTop();
    });
});