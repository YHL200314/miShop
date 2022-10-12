$(function () {
    var lis =  document.getElementsByClassName('lis')
    var headListgoods = document.getElementsByClassName('headList-goods')[0]
    var ListgoodsImg = document.getElementsByClassName('ListgoodsImg')
    
    let arr =['//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011810_86ad513472d1423a3fdec8d7d5107038.png?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/050a724309c945e0ffef3fb633069b49.jpg?thumb=1&w=250&h=250&f=webp&q=90']
    
    for(let i = 0; i < lis.length; i++){
        let liss=  lis[i];
        liss.onmouseover = function(){
            headListgoods.style.height = '200px'
            headListgoods.style.transition = 'height .5s'
            
            if(i==0){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011810_86ad513472d1423a3fdec8d7d5107038.png?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }else if(i==1){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }else if(i==2){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }else if(i==3){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }else if(i==4){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }else if(i==5){
                for(let j = 0; j < ListgoodsImg.length; j++){
                    let ListgoodsImgs = ListgoodsImg[j]
                    ListgoodsImgs.src = '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/050a724309c945e0ffef3fb633069b49.jpg?thumb=1&w=250&h=250&f=webp&q=90'
                }
            }
        }
        headListgoods.onmouseover = function(){
            headListgoods.style.height = '200px'
        }
        liss.onmouseout = function(){
            headListgoods.style.height = '0px'
            headListgoods.style.transition = 'height .2s'
        }
        headListgoods.onmouseout = function(){
            headListgoods.style.height = '0px'
            headListgoods.style.transition = 'height .2s'
        }
    }
})