// $.fn.extend({})
$.fn.banner = function(option){
    // 接收传递的数据
    var data = option.data;
    // 多少张图片
    var len = data.length;
    // 图片字符串
    var pic_html = '';
    // 定义导航点字符串
    var point_html = '';
    // 循环
    for(var i = 0 ; i < len;  i++){
        // 图片字符串的拼接
        pic_html+='<li><a href="'+data[i].url+'"><img src="'+data[i].src+'" alt=""></a></li>';
        // 导航点字符串拼接
        point_html+='<li></li>';
    }
    // 再拼接第一张图片
    pic_html+='<li><a href="'+data[0].url+'"><img src="'+data[0].src+'" alt=""></a></li>';
    // 渲染字符串
    // $(this)===$(".container")
    $(this).find("ul").html(pic_html);
    $(this).find("ol").html(point_html);
    // 设置第一个导航点的背景色
    $(this).find("ol").children().eq(0).addClass("active");

    // 定义索引值
    var index = 0;
    var key = 0;
    // 定义变量接收图片的宽度
    var width = $(this).find("ul").children().eq(0).width();
    // console.log(width)
    // 定时器
    var timer = null;
    // 记录ul标签
    var $ul = $(this).find("ul");
    // console.log($(this).find("ul"))
    // 定义函数（自动轮播）
    var autoPlay = function(){
        index ++;
        if(index > len){ //为啥这不用减一 ，因为多了一个li标签
            index = 1;
            // 设置ul标签的位置
            $ul.css("marginLeft",0);
        }
        console.log( -(index * width))
        // 动画设置ul标签位置
        $ul.animate({
            marginLeft:-(index * width)
        },300);
        // 设置导航点
        key ++;
        key = key > (len - 1) ? 0 : key; //此处为啥减一，因为导航点的最大索引值是4
        $(".propagation ol li").eq(key).addClass("active");
        $(".propagation ol li").eq(key).siblings().removeClass("active");
    }
    // 自动轮播
    timer = setInterval(autoPlay,1000);

    // 鼠标移入，停止轮播
    $(this).hover(function(){
            clearInterval(timer);
    },function(){//鼠标移开，继续轮播
           clearInterval(timer);
           //继续执行定时器
           timer = setInterval(autoPlay,1000);
    })

    // 点击导航点，实现图片切换
    $(".propagation ol").delegate('li','click',function(){
         // 当前点击的li标签的索引值
         var currentIndex = $(this).index();
         // 赋值
         index = currentIndex;
         key = currentIndex;
         // 动画设置ul标签位置
         $ul.animate({
             marginLeft:-(index * width)
         },300);
        //  设置导航点跟随切换
        $(".propagation ol li").eq(key).addClass("active");
        $(".propagation ol li").eq(key).siblings().removeClass("active");
    })

    // 左边按钮
    $(".btn-prev").click(function(){
        // 
        index --;
        // len == 5   图片有六张
        // 
        if(index < 0){
            index = len -1;
            $ul.css("marginLeft",-len*width)
        }
        // 动画设置ul标签位置
        $ul.animate({
            marginLeft:-(index * width)
        },300);
        // 
        key -- ;
        key = key < 0 ? len -1 : key;
        //  设置导航点跟随切换
        $(".propagation ol li").eq(key).addClass("active");
        $(".propagation ol li").eq(key).siblings().removeClass("active");
    })


    // 右边按钮
    $(".btn-next").click(function(){
        index ++;
        if(index > len){
            index = 1;
            $ul.css("marginLeft",0)
        }
        // 动画设置ul标签位置
        $ul.animate({
            marginLeft:-(index * width)
        },300);
        key ++;
        key = key > (len-1) ? 0 : key;
         //  设置导航点跟随切换
         $(".propagation ol li").eq(key).addClass("active");
         $(".propagation ol li").eq(key).siblings().removeClass("active");
        
        // autoPlay();
    })
}

// 备注：
// $dom.animate({},时间1);
// timer = setInterval(fn,时间2)
// 必须时间2大于时间1