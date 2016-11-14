$(function(){
    //展示手机切换 
     var n=0;
            var m=$(".show-l-t ul li").length;
            $(".show-l-t ol li").click(function() {
                $(".show-l-t ol li").attr('class', "");  
                $(this).attr('class', 'active1');
                $(".show-l-t ul li").stop().fadeTo(300, 0);
                $(".show-l-t ul li").eq($(this).index()).stop().fadeTo(300, 1);
                n=$(this).index();
            });
            var timer=setInterval(function(){
                $(".show-l-t ul li").stop().fadeTo(300, 0);
                $(".show-l-t ul li").eq(n).stop().fadeTo(300, 1);
                $(".show-l-t ol li").attr('class', "");  
                $(".show-l-t ol li").eq(n).attr('class', 'active1');
                n++;
                if(n>=m)
                {
                    n=0;
                }
            },3000)
            $(".show-l-t ul li").mouseover(function(event) {
                clearInterval(timer);
            });
            $(".show-l-t ul li").mouseout(function(event) {
                timer=setInterval(function(){
                    $(".show-l-t ul li").stop().fadeTo(300, 0);
                    $(".show-l-t ul li").eq(n).stop().fadeTo(300, 1);
                    $(".show-l-t ol li").attr('class', "");  
                    $(".show-l-t ol li").eq(n).attr('class', 'active1');
                    n++;
                    if(n>=m)
                    {
                        n=0;
                    }
                },3000)
            });
        var x=0;
            var m=$(".show-l-t-2 ul li").length;
            $(".show-l-t-2 ol li").click(function() {
                $(".show-l-t-2 ol li").attr('class', "");  
                $(this).attr('class', 'active1');
                $(".show-l-t-2 ul li").stop().fadeTo(300, 0);
                $(".show-l-t-2 ul li").eq($(this).index()).stop().fadeTo(300, 1);
                x=$(this).index();
            });
            var timer=setInterval(function(){
                $(".show-l-t-2 ul li").stop().fadeTo(300, 0);
                $(".show-l-t-2 ul li").eq(x).stop().fadeTo(300, 1);
                $(".show-l-t-2 ol li").attr('class', "");  
                $(".show-l-t-2 ol li").eq(x).attr('class', 'active1');
                x++;
                if(x>=m)
                {
                    x=0;
                }
            },3000)
            $(".show-l-t-2 ul li").mouseover(function(event) {
                clearInterval(timer);
            });
            $(".show-l-t-2 ul li").mouseout(function(event) {
                timer=setInterval(function(){
                    $(".show-l-t-2 ul li").stop().fadeTo(300, 0);
                    $(".show-l-t-2 ul li").eq(z).stop().fadeTo(300, 1);
                    $(".show-l-t-2 ol li").attr('class', "");  
                    $(".show-l-t-2 ol li").eq(z).attr('class', 'active1');
                    x++;
                    if(x>=m)
                    {
                        x=0;
                    }
                },3000)
            });
            var z=0;
            var m=$(".show-l-t-1 ul li").length;
            $(".show-l-t-1 ol li").click(function() {
                $(".show-l-t-1 ol li").attr('class', "");  
                $(this).attr('class', 'active1');
                $(".show-l-t-1 ul li").stop().fadeTo(300, 0);
                $(".show-l-t-1 ul li").eq($(this).index()).stop().fadeTo(300, 1);
                z=$(this).index();
            });
            var timer=setInterval(function(){
                $(".show-l-t-1 ul li").stop().fadeTo(300, 0);
                $(".show-l-t-1 ul li").eq(z).stop().fadeTo(300, 1);
                $(".show-l-t-1 ol li").attr('class', "");  
                $(".show-l-t-1 ol li").eq(z).attr('class', 'active1');
                z++;
                if(z>=m)
                {
                    z=0;
                }
            },3000)
            $(".show-l-t-1 ul li").mouseover(function(event) {
                clearInterval(timer);
            });
            $(".show-l-t-1 ul li").mouseout(function(event) {
                timer=setInterval(function(){
                    $(".show-l-t-1 ul li").stop().fadeTo(300, 0);
                    $(".show-l-t-1 ul li").eq(z).stop().fadeTo(300, 1);
                    $(".show-l-t-1 ol li").attr('class', "");  
                    $(".show-l-t-1 ol li").eq(z).attr('class', 'active1');
                    z++;
                    if(z>=m)
                    {
                        z=0;
                    }
                },3000)
            });
    //颜色套餐切换
    $(".show-r .li3-1").click(function(){
        $(".show-l-t").css('display', "block"); 
        $(".show-l-t-1").css('display', "none");
        $(".show-l-t-2").css('display', "none");
        $('.roll-r .em2').html($(".show-r .li3-1").html()); 
    })
    $(".show-r .li3-2").click(function(){
        $(".show-l-t").css('display', "none"); 
        $(".show-l-t-1").css('display', "block");
        $(".show-l-t-2").css('display', "none");
        $('.roll-r .em2').html($(".show-r .li3-2").html());  
    })
    $(".show-r .li3-3").click(function(){
        $(".show-l-t").css('display', "none");
        $(".show-l-t-1").css('display', "none");  
        $(".show-l-t-2").css('display', "block");
        $('.roll-r .em2').html($(".show-r .li3-3").html()); 
    })
      $('.li2-5').click(function(event) {
          $('.roll-r .em1').html($(this).html()); 
      });
    $(".show-r .li5").click(function(){
        $('.roll-r .em3').html($(this).html()); 
    })
//变化价格
    $('.li2-2').click(function () {
        $('.show-r-t p span span').html(2499.+".00");
        $('.roll-r span span').html(2499.+".00");
    })
    $('.li2-3').click(function () {
        $('.show-r-t p span span').html(2299.+".00");
        $('.roll-r span span').html(2299.+".00");
    })
//套餐选择
    $(".show-r .li2").click(function(){
        $(".show-r .li2").css('border-color', "#dcdcdc"); 
        $(this).css('border-color', "#00c3f5"); 
    })
    $(".show-r .li3").click(function(){
        $(".show-r .li3").css('border-color', "#dcdcdc"); 
        $(this).css('border-color', "#00c3f5"); 
    })
     $(".show-r .li4").click(function(){
        $(".show-r .li4").css('border-color', "#dcdcdc"); 
        $(this).css('border-color', "#00c3f5"); 
    })
    $(".show-r .li4").click(function(){
        $(".show-r .li4").css('border-color', "#dcdcdc"); 
        $(this).css('border-color', "#00c3f5"); 
    })
    $(".show-r .li5").click(function(){
        $(".show-r .li5").css('border-color', "#dcdcdc"); 
        $(this).css('border-color', "#00c3f5"); 
    })
    //手机数量操作
    $(".input1").click(function(){
        var n= $(".show-r-b .ul3 .li2").html();
        n++;
        $(".show-r-b .ul3 .li2").html(n);
    })
    $(".input2").click(function(){
        var n= $(".show-r-b .ul3 .li2").html();
        n--;
        if(n<=0){
            n=0;
        }
        $(".show-r-b .ul3 .li2").html(n);
    })
    //消失提示
    $(".show-r-b .ul3 .li11 i").click(function(event) {
        $('.show-r-b .ul3 .li11').css("display","none");
    });
    //切换详情页展示
    $('.guige li').click(function(event) {
        $('.guige li').attr('class', '');
        $(this).attr('class', 'actave2');
    });
    $('.guige .a5').click(function(event) {
       $('.img').css('display', 'block');
       $('.img1').css('display', 'none');
    });
    $('.guige .a6').click(function(event) {
       $('.img').css('display', 'none');
       $('.img1').css('display', 'block');
    });
    //滚动出现roll
    $(window).scroll(function(event) {
       var top=$(window).scrollTop();
       if(top>=200){
        $('.roll').slideDown(300);
         if(top>400){
                $('.roll-r').animate({
                    right: 200},
                    500, function() {
                        // if(top<400){
                        //       $('.roll-r').animate({
                        //           right: 80},
                        //           500, function() {
                        //       });
                        // } 
                            $('.rool-r-1 .a1').css('display', 'block');
                            $('.rool-r-1 .a1').animate({
                                    right: 70},
                                    500, function() {
                                });
                });
            }
       }
       else{
          $('.roll').slideUp(300);
       }      
    });
    //回到顶部
    $(window).scroll(function(event) {
        $('.rool-1-1 .a1').click(function(event) {
            /* Act on the event */
            var timer=setInterval(function() {
                var scrollTop=$(window).scrollTop();
                 if(scrollTop==0)
                {
                    clearInterval(timer); 
                }
                else{
                    scrollTop=scrollTop-20;
                    // $(window).scrollTop=scrollTop;
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
                }
                
            },50)
        })
    });
    // cookie的设置
    var a1=getCookie("name");
    var a2=getCookie("pws");
    $('.cookie3').html(getCookie("name"));
    if(a1!=""){
        $('.cookie1').css('display', 'none');
        $('.cookie2').css('display', 'block');
    }
    //
    $('.cookie3').click(function(event) {
        /* Act on the event */
        $('.cookie1').css('display', 'block');
        $('.cookie2').css('display', 'none');
    });
    
    $('.cookie4').click(function(event) {
        /* Act on the event */
        $('.cookie1').css('display', 'block');
        $('.cookie2').css('display', 'none');
    });
     $('.box1 .ul2 .a2').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
            open("shoucang.html");
        }
    });
    $('.box1 .ul2 .a3').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
            open("dingdan.html");
        }
    });
    //
    $('.rool-r-1 .a1').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
           open("goumai.html");
        }
    });
    ///
    
    $('.show-r-b .li9').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
           open("goumai.html");
        }
    });

    $('.li-s').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
           open("shoucang.html");
        }
    });
    //存入名字
    $('.li-s').click(function(event) {
        var date = new Date();
        date.setDate(date.getDate()+10);
        /* Act on the event */
        setCookie("shouji",$('.show-r').find('h4').html(),date);
    });
})