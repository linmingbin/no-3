$(function () {
    // 五张卡点击事件
    $('.kabox ul li').click(function () {
        var index = $(this).index() + 1;
        $(this).addClass('active').siblings().removeClass('active');
        $('.zhan').attr('class', 'zhan');
        if ($(this).children('i').hasClass('h')) {
            // console.log(1)
            $('.zhan').addClass('ka' + index + 'h')
        } else if ($(this).children('i').hasClass('l')) {
            // console.log(0)
            $('.zhan').addClass('ka' + index)
        };
    });
    // 点击答题
    $('.question_box>ul>li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // 点击选择好友
    $('.kuang_box ul li i').click(function(){
        $(this).toggleClass('active');
    })

});


// 显示答题区域
function showAnswerQuestion() {
    $('#answerQuestion').removeClass('hidden');
    timing();
    $('.question_l').addClass('hidden');
}
// 倒计时函数
function timing() {
    s = 10;
    var times = setInterval(function () {
        s -= 1;
        if (s === 0) {
            $('.qtitle').text("倒计时:0秒")
            clearInterval(times)
        } else {
            $('.qtitle').text('倒计时:' + s + '秒');
        }
    }, 1000);
}
// 关闭弹窗
function closePop(){
    $('.pop').addClass('hidden');
}
// 显示对应弹窗
function showP(id){
    // var thisp=document.getElementById(id);
    $('#'+id+'').removeClass('hidden')
}
