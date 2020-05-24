var constructor = ()=>{
    //data 반영하기 - cache된 데이터를 쓰기 편하게 가져온다
    var data = cacheData;
    var width = movingData.width;
    var height = movingData.height;
    var list = data.list;
    var checkListItems = document.querySelector('.sliding-check-items');
    checkListItems.innerHTML = "";
    var checkListItem = document.querySelector('#template-sliding-check-item').innerHTML;
    var len = list.length;

    for (var i = 0; i < len; i++) {
        checkListItems.innerHTML += checkListItem.replace('{img-kind}', './../img/check-off.png')
                                                 .replace('{class}','sliding-check-' + i);
    }
    checkListItems.firstElementChild.querySelector('img').src = './../img/check-on.png';
    checkListItems.innerHTML += checkListItem.replace('{img-kind}', './../img/stop-btn.png')
                                             .replace('{class}', 'sliding-check-play-stop');

    //item div 결정하기 - using templating
    var slidingItem = document.querySelector('.sliding-item');
    slidingItem.style.width = width * (len + 3) + "px";
    slidingItem.innerHTML = "";
    
    if(data.list[len-1].thumbnail === 'null' || !(data.list[len-1].thumbnail)){
    	data.list[len-1].thumbnail = "./../img/imgPrepare.png";
    }
    var slidingItems = document.querySelector('#template-sliding-items').innerHTML;
    slidingItem.innerHTML += slidingItems.replace('{name}',data.list[len-1].id)
                                         .replace('{img}', data.list[len-1].thumbnail)
                                         .replace('{title}',data.list[len-1].title)
                                         .replace('{information}',data.list[len-1].information);
    for(var i = 0; i < len; i++){
    	if(data.list[i].thumbnail === 'null' || !(data.list[i].thumbnail)){
        	data.list[i].thumbnail = "./../img/imgPrepare.png";
        }
        slidingItem.innerHTML += slidingItems.replace('{name}',data.list[i].id)
                                            .replace('{img}', data.list[i].thumbnail)
                                            .replace('{title}',data.list[i].title)
                                            .replace('{information}',data.list[i].information);
    }
    if(data.list[0].thumbnail === 'null' || !(data.list[0].thumbnail)){
    	data.list[0].thumbnail = "./../img/imgPrepare.png";
    }
    slidingItem.innerHTML += slidingItems.replace('{name}',data.list[0].id)
                                         .replace('{img}', data.list[0].thumbnail)
                                         .replace('{title}',data.list[0].title)
                                         .replace('{information}',data.list[0].information);
    slidingItem.style.left = -1 * width + 'px';

}