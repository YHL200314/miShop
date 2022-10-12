$(function(){
    let arr =['//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011810_86ad513472d1423a3fdec8d7d5107038.png?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=250&h=250&f=webp&q=90','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/050a724309c945e0ffef3fb633069b49.jpg?thumb=1&w=250&h=250&f=webp&q=90']
    
    // $('.lis').mouseover(function(){
    //     let index = $(this).index()
    //     $('.ListgoodsImg').attr('src',arr[index])
    //     $('.headList-goods').css({'height':'200px','transition':'height .5s'})
    // })
    // $('.lis').mouseout(function(){
    //     $('.headList-goods').css({'height':'0px','transition':'height .5s'})
    // })
    $('.lis').hover(function(){
            let index = $(this).index()
            $('.ListgoodsImg').attr('src',arr[index])
            $('.headList-goods').css({'height':'200px','transition':'height .5s'})
    },function(){
            $('.headList-goods').css({'height':'0px','transition':'height .5s'})
    })
    
    
    $('.headList-goods').mouseover(function(){
        $('.headList-goods').css({'height':'200px','transition':'height .5s'})
    })
    $('.headList-goods').mouseout(function(){
        $('.headList-goods').css({'height':'0px','transition':'height .5s'})
    })
    
    
    
})