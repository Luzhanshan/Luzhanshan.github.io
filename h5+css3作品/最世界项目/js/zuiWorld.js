//轮播图
var num = 0, y = 0;
var shuff_ul = document.querySelector('.shuff_tu ul');
var ols = document.querySelectorAll('.big_screen ol li');
ols[0].style.background = '#ff7467';
//【右】轮播到下一张
function changeImg(){
	num++;
	y++;
	shuff_ul.style.left = -num*100 + "%";
	if(num == 3){
		num = -1;
	}
	if(y == 4){
		y = 0;
	}
	for (var i = 0;i < ols.length; i++) {
		ols[i].style.background = '#000';
	}
	ols[y].style.background = '#ff7467';
}
var imgTime = setInterval(changeImg,2000);
//========================
//继续轮播图
function continueImg(){
	clearInterval(imgTime);
	imgTime = setInterval(changeImg,2000);
}
//========================
//【左】轮播到上一张
var wrap = document.querySelector('.shuff_tu');
var liEles = document.querySelectorAll('.shuff_tu>ul>li');
function lastMove(){
	num--;
	y--;
	if (num < 0) {
		num = liEles.length - 1;
	}
	if(y < 0){
		y = ols.length - 1;
	}
	shuff_ul.style.left = -num*100 + "%";
	for (var i = 0;i < ols.length;i++) {
		ols[i].style.background = '#000';
	}
	ols[y].style.background = '#ff7467';
}
//鼠标放上去，轮播图停止
$('.big_screen').mouseover(function(){
	clearInterval(imgTime);
});
//鼠标离开，停止图片状态，轮播图继续
$('.big_screen').mouseout(function(){
	continueImg();
});
//右键
$('#right').click(function(){
	changeImg();
	continueImg();
});
//左键
$('#left').click(function(){
	lastMove();
	continueImg();
});
//===========================
//轮播图上的指示条
var ols = $('.big_screen ol li');
$('.big_screen ol li').click(function(){
	for (var i = 0;i < ols.length; i++) {
		ols[i].style.background = '#000';
	}
	// ols[$(this).index()].style.background = '#ff7467';
	$(this).css('background','#ff7467');
	console.log($(this));
	$($banner_ul).css('left',-$(this).index()*100 + '%');
	changeImg();
	continueImg();
})
//===================
//APP 鼠标放上去和鼠标离开的时候的效果
var wrap_img = document.querySelector('.wrap_tu img');
$('.wrap_tu').mouseover(function(){
	$(wrap_img).css('top','-4px');
});
$('.wrap_tu').mouseout(function(){
	$(wrap_img).css('top','0px');
});
