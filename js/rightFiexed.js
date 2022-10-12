$(function(){
    
    let arr = ['https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png','https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png','https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png','https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png']
    let arr2 = ['https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png','https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png','https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png','https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png']
    
    let rightFiexed = document.querySelector('.rightFiexed')
    let rightFiexedItem = document.querySelectorAll('.rightFiexedItem')
    let rightFiexedImg = document.querySelectorAll('.rightFiexedImg img')
    let rightFiexedMsg = document.querySelectorAll('.rightFiexedMsg span')
    let phoneCode = document.querySelector('.phoneCode')
    
    for(let i = 0; i < arr.length; i++){
        rightFiexedImg[i].src = arr[i]
        rightFiexedItem[i].onmouseover = function (){
            rightFiexedImg[i].src = arr2[i]
            if(i==0){
                phoneCode.style.display = 'block'
            }else{
                phoneCode.style.display = 'none'
            }
        }
        rightFiexedItem[i].onmouseout = function (){
            rightFiexedImg[i].src = arr[i]
            phoneCode.style.display = 'none'
        }
    }
    
    let backTop = document.querySelector('.backTop')
    backTop.onclick = function (){
        
        scrollTo(0,0);
    }
    
    
    window.onscroll = function(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >=1000 ) {
            rightFiexed.style.top = '60px'
            phoneCode.style.top = '60px'
            backTop.style.display = 'block'
            backTop.style.top = '520px'
        } else{
            rightFiexed.style.top = '140px'
            phoneCode.style.top = '140px'
            backTop.style.display = 'none'
            backTop.style.top = '600px'
        }
    }
    
})