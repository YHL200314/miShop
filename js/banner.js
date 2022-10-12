$(function(){ 
    let bannerContent = document.getElementsByClassName('bannerContent')[0]
    let bannerContentItems = document.getElementsByClassName('bannerContent-img')
    let ItemImgs = document.querySelectorAll('.bannerContent-img img')
    let leftBtn = document.querySelector('.leftbtn')
    let rightBtn = document.querySelector('.rightbtn')
    let btnList = document.querySelector('.btnList')
    
    let index = 0
    rightBtn.onclick = function() {
        if (index == 3) {
            index = 0
        } else {
            index += 1
        }
        removeActive()
        bannerContentItems[index].style.transition = 'opacity 1s'
        bannerContentItems[index].style.opacity = '1'
    }
    leftBtn.onclick = function() {
        if (index == 0) {
            index = 3
        } else {
            index -= 1
        }
        removeActive()
        bannerContentItems[index].style.transition = 'opacity 1s'
        bannerContentItems[index].style.opacity = '1'
    }
    
    //设置计时器实现自动轮播
    let timer = setInterval(()=>{
        if(index == 3) index = 0
        else index += 1
        for(let i = 0; i < bannerContentItems.length; i++){
            bannerContentItems[i].style.opacity = '0'
        }
        removeActive()
        bannerContentItems[index].style.transition = 'opacity 1s'
        bannerContentItems[index].style.opacity = '1'
     },3000)
    
    bannerContent.onmouseout = function(){
        timer = setInterval(()=>{
            if(index == 3) index = 0
            else index += 1
            for(let i = 0; i < bannerContentItems.length; i++){
                 bannerContentItems[i].style.opacity = '0'
            }
            removeActive()
            bannerContentItems[index].style.transition = 'opacity 1s'
            bannerContentItems[index].style.opacity = '1'
            },3000)
    }
    bannerContent.onmouseover = function(){
        clearInterval(timer)
    }
    
    // 初始化小圆点
    let circle = ''
    for(let i = 0; i < bannerContentItems.length; i++){
        circle += `<div class="btnList-circle"></div>`
    }
    btnList.innerHTML = circle
    // 第一个小圆点变红
    document.querySelector('.btnList-circle').classList.add('active')
    let circles = document.querySelectorAll('.btnList-circle')
    for (let i = 0; i < circles.length; i++) {
        circles[i].onclick = function(){
            index = i
            removeActive()
            bannerContentItems[index].style.transition = 'opacity 1s'
            bannerContentItems[index].style.opacity = '1'
        }
    }
    function removeActive() {
        for (let i = 0; i < circles.length; i++) {
             circles[i].classList.remove('active')
        }
        for(let i = 0; i < bannerContentItems.length; i++){
             bannerContentItems[i].style.opacity = '0'
        }
        circles[index].classList.add('active')
        bannerContentItems[index].style.transition = 'opacity 1s'
        bannerContentItems[index].style.opacity = '1'
    }
    
})