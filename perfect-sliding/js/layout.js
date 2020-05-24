 'use strict'
var slidingLayout = ()=>{
    //1. wrap 사이즈 결정하기
    var width = movingData.width;
    var height = movingData.height;
    var slidingItem = document.querySelector('.sliding-item');
    var len = cacheData.list.length;
    setSlidingWrap();
    setSlidingArray();
    setSlidingCheck();

    movingData.len = len;
    movingData.width = width;
    setSlidingImgAndList();
}
//레이아웃 변경 메서드
var changeLayoutSize = (width, height)=>{
    movingData.width = width;
    movingData.height = height;
    slidingLayout();
}



var setSlidingWrap = ()=>{
    var width = movingData.width;
    var height = movingData.height;
    var slidingWrap = document.querySelector('.sliding-wrap');
    slidingWrap.style.width = width + "px";
    slidingWrap.style.height = height + "px";
}
var setSlidingArray = ()=>{
    var width = movingData.width;
    var height = movingData.height;
    var arrowWidth = width / 12;
    var arrowHeight = height / 6;
    var leftArrow = document.querySelector('.sliding-left-arrow > img');
    var rightArrow = document.querySelector('.sliding-right-arrow > img');
    leftArrow.style.width = arrowWidth + "px";
    leftArrow.style.height = arrowHeight + "px";
    rightArrow.style.width = arrowWidth + "px";
    rightArrow.style.height = arrowHeight + "px";
    leftArrow.style.left = (height + arrowHeight) / 2 + "px";
    var la = document.querySelector('.sliding-left-arrow');
    var ra = document.querySelector('.sliding-right-arrow');
    la.style.top = (height - arrowHeight) / 2 + "px";
    ra.style.top = (height - arrowHeight) / 2 + "px";
    ra.style.left = (width - arrowWidth) + "px";
}
var setSlidingCheck = ()=>{
    var width = movingData.width;
    var height = movingData.height;
    var arrowWidth = width / 12;
    var arrowHeight = height / 6;
    var slidingCheck = document.querySelector('.sliding-check-box');
    slidingCheck.style.height = "50px";
    slidingCheck.style.width = (width - 2 * arrowWidth) + "px";
    slidingCheck.style.left = arrowWidth + "px";
    slidingCheck.style.top = height - 60 + "px";
}
var setSlidingImgAndList = ()=>{
    //item div의 이미지, 리스트 크기 조정하기
    var width = movingData.width;
    var height = movingData.height;
    var slidingItem = document.querySelector('.sliding-item');
    var len = cacheData.list.length;
    var slidingListImg = slidingItem.querySelectorAll('li img');
    slidingListImg.forEach((v,i)=>{
        v.style.width = width -(width / 6)+ 'px';
        v.style.height = height+ 'px';
    });
    var slidingATag = slidingItem.querySelectorAll('li a');
    slidingATag.forEach((v,i)=>{
    	v.style.left = (width / 12) + 'px';
    });
    var slidingList = slidingItem.querySelectorAll('li');
    slidingList.forEach((v,i)=>{
        v.style.width = width + 'px';
        v.style.height = height + 'px';
    });

    //item div의 title, info 조정하기
    slidingItem.querySelectorAll('li a:nth-child(2)').forEach((v,i)=>{
        v.style.fontSize = '3.5rem';
        v.style.top = (height / 10) + 'px';
        v.style.left = 30 + (width/12) + 'px';
    });
    slidingItem.querySelectorAll('li a:nth-child(3)').forEach((v,i)=>{
        v.style.fontSize = '15px';
        v.style.top = (height / 10) + 60 + 'px';
        v.style.left = 30 + (width/12) + 'px';
    });
}