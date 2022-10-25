import $ from 'jquery';

export default {
}
// 視差滾動
$(function(){
    // 避免事件重覆觸發    
    var showAdv = false;

    // 滾動套用css效果
    // 滾動事件
    $(window).on('scroll',function(){
        // 偵測 當下網頁可視範圍的視窗大小 之中，網頁右邊卷軸至網頁頂端的距離
        var scrollPosition = $(window).scrollTop();

        // 偵測 當下網頁可視範圍的視窗高度
        var windowHeight = $(window).height();

        // 動態顯示的進度條
        // 讀出 服務品質三冠王 此區塊的高度     
        var advTop = $('#advantage').position().top;

        // 當滾動位置超過服務品質三冠王區塊時觸發事件
        // 為了解決顯示時間延遲問題，必須把視窗高度除2以提早顯示出效果
        if (advTop <= (scrollPosition + windowHeight / 2) && !showAdv) {
        // 特效已執行，改為true以後不符合判斷式條件，因此不會再次執行此function
        showAdv = true;

        $('#advantage .progress-bar').each(function(){
        // 讀出每個.progress-bar裡面的值
        var thisValue = $(this).data('progress');

        // 將讀取出的值(各進度條%數)加進css裡
        $(this).css('width',thisValue + '%');
        });
        }

        // 使用each，把動態效果讀進來
    $('.animated').each(function(){
        // $(this).offset().top:取得該元素位置的y軸座標
        var thisPosition = $(this).offset().top;

        // 當下網頁可視範圍的視窗高度 + 網頁右邊卷軸至網頁頂端的距離 >= 該元素位置的y軸座標
        if((windowHeight + scrollPosition >= thisPosition)){
            // 動態替元素新增一個名為fadeIn的class
            $(this).addClass('fadeIn');
        }
    });

        // 使用each，把動態效果讀進來
    $('.animatedX').each(function(){
        // $(this).offset().top:取得該元素位置的y軸座標
        var thisPosition = $(this).offset().top;

        // 當下網頁可視範圍的視窗高度 + 網頁右邊卷軸至網頁頂端的距離 >= 該元素位置的y軸座標
        if((windowHeight + scrollPosition >= thisPosition)){
            // 動態替元素新增一個名為fadeInX的class
            $(this).addClass('fadeInX');
        }
    });

    // 滾動中持續改變物件位置(css transform)
    // 設負值會往反方向移動
        $('#wrap').css('background-position-y',-(scrollPosition / 2) + 'px')
    });
});