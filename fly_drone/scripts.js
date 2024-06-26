$('.banner').mousemove(function(e) {
    var bannerWidth = $(this).width();
    var bannerHeight = $(this).height();
    var centerX = bannerWidth / 2;
    var centerY = bannerHeight / 2;

    var mouseX = e.clientX;
    var mouseY = e.clientY;

    var offsetX = mouseX - centerX;//target x
    var offsetY = mouseY - centerY;//tarrget y

    $('#drone-box').css({
        'left': (centerX - offsetX - 100) + 'px', // 100 is half the width of the drone-box
        'top': (centerY - offsetY - 100) + 'px'   // 100 is half the height of the drone-box
    });
});
