
'use strict'
//caching 후, constructor 호출
var cachingAndConstruct = (data)=>{
    cacheData = data;
    constructor();
    slidingLayout();
    setTimeout(timeoutOperation,2000);
}

function moveSlider() {
    //1. 불을 전부 끈다
    let totalMove = movingData.curPos - movingData.nextPos;
    let changedLoc = totalMove * movingData.width;
    
    movingData.mode = 'false';
    movingData.curPos = movingData.nextPos;
    let checkItems = document.querySelectorAll('.sliding-check-box ul li img');
    checkItems.forEach((v,i) =>{
        if(v.getAttribute('class') !== 'sliding-check-play-stop'){
            v.src = './../img/check-off.png';
        }
    });
    let tmpCur = movingData.curPos;
    tmpCur = (movingData.len + movingData.curPos) % movingData.len;
    checkItems[tmpCur].src = './../img/check-on.png';
    //2. 이동시킨다
    var sliding = document.querySelector('.sliding-item');
    movingData.transLoc += changedLoc;
    sliding.style.transform = 'translate(' + movingData.transLoc + 'px, '+ 0+'px)';
};

function timeoutOperation(){
    if(movingData.mode === 'true'){
        movingData.nextPos += 1;
        moveSlider();
    }
    movingData.timefunc = window.setTimeout(timeoutOperation,2000);
};

document.querySelector('.sliding-item').addEventListener('transitionend', (e)=>{
    var leftValue = e.currentTarget.style.left;
    leftValue = leftValue.toString();
    leftValue = leftValue.substr(0,leftValue.indexOf('p'));
    leftValue = parseInt(leftValue);
    if(movingData.curPos === -1){
        movingData.curPos = movingData.nextPos = movingData.len-1;
        e.currentTarget.style.left = (leftValue + (-1 * movingData.len) * movingData.width) + 'px';
    }else if(movingData.curPos === movingData.len){
        movingData.curPos = movingData.nextPos = 0;
        e.currentTarget.style.left = (leftValue + movingData.len*movingData.width) + 'px';
    }
    movingData.mode = 'true';
});
