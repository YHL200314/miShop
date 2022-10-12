$(function(){
    let videoModal = document.querySelector('.videoModal')
    let videoModalTitle = document.querySelector('.videoModalTitle')
    let videoModalContentbottom = document.querySelector('.videoModalContentbottom video')
    
    
    let arr = ['2021年春季新品发布会第一场','Redmi 10X系列发布会','小米10 青春版 发布会','小米10 8K手机拍大片']
    let arr2 = ['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4']
    
    let videoItem = document.querySelectorAll('.videoItem')
    
    for(let i = 0; i < arr.length; i++){
        videoItem[i].onclick = () =>{
            videoModal.style.display = 'block'
            videoModalTitle.innerText = arr[i]
            videoModalContentbottom.src = arr2[i]
        }
        videoItem[i].onmouseover = ()=>{
            videoItem[i].style.marginTop = '-5px'
            videoItem[i].style.transition = 'marginTop 1s'
        }
        videoItem[i].onmouseout = ()=>{
            videoItem[i].style.marginTop = '0px'
            videoItem[i].style.transition = 'marginTop 1s'
        }
    }
    
    let videoModalClose = document.querySelector('.videoModalClose')
    videoModalClose.onclick = () =>{
        videoModal.style.display = 'none'
    }
    
})