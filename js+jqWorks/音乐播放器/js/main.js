var playList = [
    {
        id: 169185,
        name: "认真的雪",
        artists: "薛之谦",
        picUrl:
            "https://p2.music.126.net/yWtj0UXRJBCT9YI7csmAcw==/109951164190741294.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
    {
        id: 5253734,
        name: "恋爱达人",
        artists: "罗志祥",
        picUrl:
            "https://p1.music.126.net/n4YTVSO7QK1VRQMCEeOPqA==/80264348845281.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
    {
        id: 277302,
        name: "爱",
        artists: "莫文蔚",
        picUrl:
            "https://p1.music.126.net/hcY73QYZt36DeGf91euboQ==/18921495602636668.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
];

var audio = document.querySelector("audio");
var list = document.querySelector(".list");
var bg = document.querySelector('.bg');
var touxiang = document.querySelector('img.touxiang');
var h3Song = document.querySelector('.card_right h3');
var h5Name = document.querySelector('.card_right h5');
var songId;
var prev = document.querySelector('.icon-prev');
var play = document.querySelector('.icon-play');
var next = document.querySelector('.icon-next');
var loop = document.querySelector('.icon-loop');
var index = 0;
var bool = true;
var progress = document.querySelector(".progress input");
var slider = document.querySelector(".progress .slider");
var wrapper = document.querySelector(".wrapper");
var changeTime = document.querySelector('.time-left');
var totalTime = document.querySelector('.time-right');

// 循环遍历数组  生成歌单
playList.forEach(function (ele, index) {
    // 创建li
    var str = document.createElement('li');
    // 获取属性值
    str.innerText = ele.name;
    // str.dataset.id = ele.id;
    // 向节点的子节点列表的末尾添加新的子节点  ul li
    list.appendChild(str);

    // 给创建的li添加点击事件
    str.addEventListener('click', function () {
        changeMusic(index);
    })
})


// 封装切歌函数
var changeMusic = function (index) {
    bg.style.backgroundImage = "url('" + playList[index].picUrl + "')";
    touxiang.src = playList[index].picUrl;
    h3Song.innerText = playList[index].name;
    h5Name.innerText = playList[index].artists;
    audio.src = "https://music.163.com/song/media/outer/url?id=" + playList[index].id + ".mp3";

};

// 封装播放顺序函数
var shunxu = function (bool) {
    if (loop.classList.contains('icon-random')) {
        var randomItem = Math.floor(Math.random() * playList.length);

        while (index == randomItem) {
            randomItem = Math.floor(Math.random() * playList.length);
        }
        index = randomItem;
        changeMusic(index);

    } else {
        if (bool) {
            index++;
            if (index >= playList.length) {
                index = 0;
            }
        } else {
            index--;
            if (index <= -1) {
                index = playList.length - 1;
            }
        }
        changeMusic(index);
    }
}

// 封装播放结束函数
audio.addEventListener('ended', function () {
    if (loop.classList.contains('icon-single')) {
        //  单曲循环
        changeMusic(index);
    } else {
        shunxu(true)
    }
})

// 封装计算时间格式的函数
function setTime(x, times) {
    if (times < 10) {
        x.innerHTML = "0:0" + Math.floor(times);
    } else if (times < 60) {
        x.innerHTML = "0:" + Math.floor(times);
    } else {
        var minute = parseInt(times / 60);
        var second = times - minute * 60;
        if (second < 10) {
            x.innerHTML = "0" + minute + ":" + "0" + parseInt(second);
        }
        else {
            x.innerHTML = "0" + minute + ":" + parseInt(second);
        }
    }
}


// 切换上一首
prev.addEventListener('click', function () {
    audio.setAttribute('autoplay', 'autoplay');
    shunxu(false)

})

// 切换下一首
next.addEventListener('click', function () {
    audio.setAttribute('autoplay', 'autoplay');
    shunxu(true)
})

// 设置指针随音乐拨动
// 当audio在播放时
audio.addEventListener("play", function () {
    // 添加类名playing
    wrapper.classList.add("playing");
    play.classList.remove('icon-play')
    play.classList.add('icon-pause')
    bool = false;
});
// 当audio暂停时
audio.addEventListener("pause", function () {
    // 移除类名playing
    wrapper.classList.remove("playing");
    play.classList.remove('icon-pause')
    play.classList.add('icon-play')
    bool = true;
});

// console.log(bool,1)
// 暂停播放
play.addEventListener('click', function () {
    if (bool) {
        audio.play();
        play.classList.remove('icon-play')
        play.classList.add('icon-pause')
        bool = false;
        // console.log(bool,3)
    } else {
        audio.pause();
        play.classList.remove('icon-pause')
        play.classList.add('icon-play')
        bool = true;
        // console.log(bool,4)
    }
})

// icon-loop icon-random icon-single
// 点击播放顺序按钮  切换模式
var change = ['icon-loop', 'icon-random', 'icon-single'];
loop.addEventListener('click', function () {
    loop.classList.remove(change[0]);
    var Nchange = change.splice(0, 1);
    change.push(Nchange);
    loop.classList.add(change[0]);
})


// 设置audio当前播放的位置
// 当audio播放时间改变的时候
audio.addEventListener("durationchange", function () {
    // 获取当前播放的位置赋值给max
    progress.max = audio.duration;
})


var inputing = false;
// timeupdate 播放进行中 
audio.addEventListener('timeupdate', function () {
    // 获取当前播放时间
    var times = audio.currentTime;
    setTime(changeTime, times);

    // 根据audio当前播放时长的百分比设置slider的宽度变化大小
    // ru
    if (inputing) {
        return;
    }
    slider.style.width = (audio.currentTime / audio.duration) * 100 + "%";
})


progress.addEventListener("input", function () {
    // 在滑动时  inputing = true;
    inputing = true;
    slider.style.width = (this.value / this.max) * 100 + "%";
})

// 鼠标拖动完毕 放开slider时
progress.addEventListener("change", function () {
    audio.currentTime = this.value;
    inputing = false;
})

// 监听音频已经加载时运行
// 设置歌曲总时长
audio.addEventListener("loadedmetadata", function () {
    var times = audio.duration;
    setTime(totalTime, times);
});

