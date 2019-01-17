$(function(){
    'user strict';
    var winH   =$(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight(),
    $('.slider,carousel-item').height(winH -(upperH + navH));
})

$('.fetuer-work ul li').on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
})