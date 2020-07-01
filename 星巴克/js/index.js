$('.right_5_prev').click(function(){
    $('.right_5_banner').animate({marginLeft : '140px'},500);
    // $('.right_5_prev').css('display','none')
    // $('.right_5_next').css('display','block')
    $('.right_5_prev').fadeOut(500)
    $('.right_5_next').fadeIn(500)
})

$('.right_5_next').click(function(){
    $('.right_5_banner').animate({marginLeft : '-200px'},500);
    // $('.right_5_prev').css('display','block')
    // $('.right_5_next').css('display','none')
    $('.right_5_prev').fadeIn(500)
    $('.right_5_next').fadeOut(500)
})

window.addEventListener('resize',function(){
    var windowWidth = document.body.clientWidth;
    if(windowWidth <1200){
        $('.right_1').css('margin-top','180px');
    }else{
        $('.right_1').css('margin-top','0')
    }
})