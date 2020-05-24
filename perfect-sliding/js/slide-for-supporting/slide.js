document.querySelector('#myRange').addEventListener('change',(e)=>{
    console.log(e.target.value);

    var width = movingData.width;
    var height = movingData.height;
    var maxWidth = movingData.maxWidth;
    var maxHeight = movingData.maxHeight;

    movingData.transLoc = 0;
    movingData.curPos = 0;
    movingData.nextPos = 0;

    width = parseInt(maxWidth * (e.target.value/100));
    height = parseInt(maxHeight * (e.target.value/100));
    changeLayoutSize(width, height);

})