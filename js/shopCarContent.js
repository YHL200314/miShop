$(function(){
    let shopCar = document.querySelector('.shopCar')
    let shopCarContent = document.querySelector('.shopCarContent')
    
    shopCar.onmouseover = function(){
        shopCarContent.style.height = '100px'
        shopCarContent.style.transition = 'height .5s'
    }
    shopCar.onmouseout = function(){
        shopCarContent.style.height = '0px'
        shopCarContent.style.transition = 'height .5s'
    }
    shopCarContent.onmouseover = function(){
        shopCarContent.style.height = '100px'
    }
    shopCarContent.onmouseout = function(){
        shopCarContent.style.height = '0px'
        shopCarContent.style.transition = 'height .5s'
    }
})