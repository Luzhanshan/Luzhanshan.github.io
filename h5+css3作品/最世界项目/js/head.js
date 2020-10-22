$('#top').hover(function(){
	$('.top').attr('src','img/top-01.png');
},function(){
	$('.top').attr('src','img/top.png');
});
//=====================
$('.dingdan').hover(function(){
	$('#right-01_zi').css('top','-49px');
},function(){
	$('#right-01_zi').css('top','0px');
});
//=====================
$('.shoucang').hover(function(){
	$('#right-02_zi').css('top','-49px');
},function(){
	$('#right-02_zi').css('top','0px');
});
//=====================
 $('#top').click(function(){
 	$('html,body').animate({scrollTop: '0px'}, 800);
 });
 $('.menu_right').css('display','none');
window.onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop < 500){
		$('.menu_right').fadeOut(1000);
	}else if(scrollTop >=500){
		$('.menu_right').fadeIn(1000);
	}
}
//=================
//手机二维码
$('.i1').mouseover(function(){
	$('.shouji').css('display','block');
	$('.shouji').mouseover(function(){
		$('.shouji').css('display','block');
	});
	$('.shouji').mouseout(function(){
		$('.shouji').css('display','none');
	})
});
$('.i1').mouseout(function(){
	$('.shouji').css('display','none');
})
//==================
//微信二维码
$('.i2').mouseover(function(){
	$('.weixin').css('display','block');
	$('.weixin').mouseover(function(){
		$('.weixin').css('display','block');
	});
	$('.weixin').mouseout(function(){
		$('.weixin').css('display','none');
	})
});
$('.i2').mouseout(function(){
	$('.weixin').css('display','none');
})
//=================
//微博
$('.i3').mouseover(function(){
	$('.weibo').css('display','block');
	$('.weibo').mouseover(function(){
		$('.weibo').css('display','block');
	});
	$('.weibo').mouseout(function(){
		$('.weibo').css('display','none');
	})
});
$('.i3').mouseout(function(){
	$('.weibo').css('display','none');
})
//==================
//信箱
$('.i4').mouseover(function(){
	$('.xinxiang').css('display','block');
	$('.xinxiang').mouseover(function(){
		$('.xinxiang').css('display','block');
	});
	$('.xinxiang').mouseout(function(){
		$('.xinxiang').css('display','none');
	})
});
$('.i4').mouseout(function(){
	$('.xinxiang').css('display','none');
})
//=================
//fixed底部
$('.close').on('click',function(){
	$('.close').css({
		'background-position': '0 0'
	});
	$('.last_big').fadeOut(1500);
});
$('#search_text').on('focus',function(){
	$('.hot_sreach').css('display','block');
});
$('#search_text').on('blur',function(){
	$('.hot_sreach').css('display','none');
});
//================
//放大镜
$('.head_glass').hover(function(){
	$('#headSreach').animate({width:'170px'},200);
},function(){
	$('#headSreach').animate({width:'0px'},200).css('display','none');
})
//================
//侧边菜单栏
var side_li = document.querySelectorAll('.side_list>li');
var list_div = document.querySelectorAll('.side_content_list');
$(side_li).on('mouseover',function(){
	list_div[$(this).index()].style.display = 'block';
	list_div[$(this).index()].onmouseover = function(){
		this.style.display = 'block';
	}
	list_div[$(this).index()].onmouseout = function(){
		this.style.display = 'none';
	}
});
$(side_li).on('mouseout',function(){
	list_div[$(this).index()].style.display = 'none';
});
//=================
//二级菜单红字部分的hover事件
$('.font').hover(function(){
	$(this).css({
		'color':'#FF5784',
		'text-decoration': 'underline'
	});
},function(){
	$(this).css('text-decoration', 'none');
})
