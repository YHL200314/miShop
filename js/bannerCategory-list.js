$(function(){
    
    let arr = ['//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b883131e62133041d7ac8272c17762b0.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/337a4766b0a55cb4f63b7222f3df4045.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ea8cb5505802096e0fcffd2b5ac01a1.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6b345f54d0f35126bab77e5e2855f17.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=50&h=50&f=webp&q=90','//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=50&h=50','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=50&h=50&f=webp&q=90']
        
        
    let arr2 = ['Xiaomi 12S','Redmi X65 2022款','Redmi G 游戏本 2022','小米手环7 NFC版','Redmi Buds 4','滚筒洗衣机','喷墨打印机','手机贴膜','益智积木','旅行箱']
    
    
    // 移入li显示商品分类列表
    let bannerCategoryList = document.querySelector('.bannerCategory-list')
    let bannerCategoryLi = document.querySelectorAll('.bannerCategory ul li')
     
    for(let j = 0; j < 24; j++){
         let bannerCategoryList2 = document.querySelector('.bannerCategory-list2')
         let bannerCategoryListItme =  document.createElement('div')
         let bannerCategoryListItmeImg =  document.createElement('div')
         let bannerCategoryListItmeTitle =  document.createElement('div')
         let itemImg =  document.createElement('img')
         let itemTitle =  document.createElement('span')
         
         itemImg.src = arr[0]
         itemTitle.innerText = arr2[0]
         
         bannerCategoryListItme.classList.add('bannerCategory-list-itme')
         bannerCategoryListItmeImg.classList.add('bannerCategory-list-itme-img')
         bannerCategoryListItmeTitle.classList.add('bannerCategory-list-itme-title')
         
         bannerCategoryList2.appendChild(bannerCategoryListItme)
         bannerCategoryListItme.appendChild(bannerCategoryListItmeImg)
         bannerCategoryListItme.appendChild(bannerCategoryListItmeTitle)
         bannerCategoryListItmeImg.appendChild(itemImg)
         bannerCategoryListItmeTitle.append(itemTitle)
         
    }
     
    for(let i = 0; i <  bannerCategoryLi.length; i++ ){
        bannerCategoryLi[i].onmouseover = function (){
            bannerCategoryList.style.display = 'block'
            let itemImg =  document.querySelectorAll('.bannerCategory-list-itme-img img')
            let itemTitle =  document.querySelectorAll('.bannerCategory-list-itme-title span')
            for(let a = 0; a < itemImg.length; a++){
                if(i==9){
                    itemImg[a].src =  '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=50&h=50//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=50&h=50'
                }else{
                    itemImg[a].src =  arr[i]
                }
                itemTitle[a].innerText = arr2[i]
            }
        }
        
        bannerCategoryList.onmouseover = function (){
            bannerCategoryList.style.display = 'block'
        }
        
        bannerCategoryList.onmouseout = function (){
            bannerCategoryList.style.display = 'none'
        }
        
        bannerCategoryLi[i].onmouseout = function (){
            bannerCategoryList.style.display = 'none'
        }
    }
    
    
    
})