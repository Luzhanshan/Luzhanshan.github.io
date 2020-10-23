$('.right_5_prev').click(function(){
    if(window.document.body.clientWidth<768){
        $('.right_5_banner').animate({marginLeft : '0px'},500);
    }else{
        $('.right_5_banner').animate({marginLeft : '140px'},500);
    }
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

$('.green').css('display', 'none')
	$('.green').eq(0).css('display', 'block')
	$('.right_7_bottom ul li').click(function () {
		$(this).find('a').addClass('active').end().siblings().find('a').removeClass('active');
		$('.right_7_bottom ul li').find('.green').css('display', 'none')
		$(this).find('.green').css('display', 'block')
	})