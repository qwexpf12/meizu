$(function  () {
    //出现下来的展示
    $(".box1 .ul1 li").mouseenter(function(event) {
       $(this).addClass('active')
    })
    $(".box1 .ul1 li").mouseleave(function(event) {
       $(this).removeClass('active')
    })
    //box4-1每一个添加透明度
    // $('.box4-1').mouseover(function(event) {
    //     $('.box4-1').css("opacity","0.5");
    //     $(this).css('opacity', '1');
    // });
//轮播图
	 var n=0;
            var m=$(".lunbo ul li").length;
            $(".lunbo ol li").click(function() {
                $(".lunbo ol li").attr('class', "");  
                $(this).attr('class', 'active');
                $(".lunbo ul li").stop().fadeTo(300, 0);
                $(".lunbo ul li").eq($(this).index()).stop().fadeTo(300, 1);
                n=$(this).index();
            });
            $(".lunbo1-l").click(function() {
                n--;
                if(n == -1){n = 4;}
                $(".lunbo ul li").stop().fadeTo(300, 0);
                $(".lunbo ul li").eq(n).stop().fadeTo(300, 1);
                 $(".lunbo ol li").attr('class', "");  
                $(".lunbo ol li").eq(n).attr('class', 'active');
                 
                clearInterval(timer);
            });
             $(".lunbo1-r").click(function() {
                n++;
                if(n == 5){n = 0;}
                $(".lunbo ul li").stop().fadeTo(300, 0);
                $(".lunbo ul li").eq(n).stop().fadeTo(300, 1);
                 $(".lunbo ol li").attr('class', "");  
                $(".lunbo ol li").eq(n).attr('class', 'active');
                clearInterval(timer);
            });
            var timer=setInterval(function(){
                $(".lunbo ul li").stop().fadeTo(300, 0);
                $(".lunbo ul li").eq(n).stop().fadeTo(300, 1);
                $(".lunbo ol li").attr('class', "");  
                $(".lunbo ol li").eq(n).attr('class', 'active');

                n++;
                if(n>=m)
                {
                    n=0;
                }
            },3000)
            $(".lunbo").mouseover(function(event) {
                clearInterval(timer);
                $(".lunbo1-l").css('background', '#000');
                $(".lunbo1-r").css('background', '#000');
            });
            $(".lunbo ul li").mouseout(function(event) {
                $(".lunbo1-l").css('background', '');
                $(".lunbo1-r").css('background', '');
                timer=setInterval(function(){
                    $(".lunbo ul li").stop().fadeTo(300, 0);
                    $(".lunbo ul li").eq(n).stop().fadeTo(300, 1);
                    $(".lunbo ol li").attr('class', "");  
                    $(".lunbo ol li").eq(n).attr('class', 'active');
                    n++;
                    if(n>=m)
                    {
                        n=0;
                    }
                },3000)
            });

    //出现菜单
    var b=0;
    $(".caidan-1 .li1").mouseover(function(event) {
        b=$(this).index()-1; 
        $(".caidanda").show();
        $(this).css('opacity', '1');
        $(".caidanda .caidan2").css('display', 'none');
        $(".caidanda .caidan2").eq(b).css('display', 'block');

    });
    $(".caidan-1").on('mouseout',function(event) {
            $(".caidanda").hide();
    });
    $('.caidanda').on('mouseover', function(event) {
             $(".caidanda").show();
    });
    $(window).click(function(event) {
        /* Act on the event */
         $(".caidanda").hide();
    });
    //手机轮播
     $(function () {
            var uls = $(".box8da");
            var index = 0;
            var lastIndex = uls.find("li").length;
            $(".box8-1-1 div").mouseover(function(){
                // $(this).attr('class', 'box8-1-1-2');
               // $(this).css({
               //  "border-width" 1+"px";
               //  "list-style":"solid";
               //  "border-color": +"#"+333;
               // })
            // move("box8-1-1 div",{top:80},function(){

            //     })
               $(this).css('border-color', '#333');
            })
             $(".box8-1-1 div").mouseout(function(){
                 // $(this).attr('class', "box8-1-1-1");  
                $(this).css('border-color', '#e5e5e5');
             })
            // console.log(lastIndex);
            var timer = setInterval(next,3000);
            uls.hover(function () {
                clearInterval(timer);
               
            },function () {
                timer = setInterval(next,3000);
               
            })

            function next() {
                uls.animate({top:index*(-343)},1000);
                index++;
                if(index>=lastIndex){
                    index=0;
                }
            }
        })
// cookie的设置
    var a1=getCookie("name");
    var a2=getCookie("pws");
    $('.cookie3').html(getCookie("name"));
    if(a1!=""){
        $('.cookie1').css('display', 'none');
        $('.cookie2').css('display', 'block');
    }else{
         $('.cookie1').css('display', 'block');
        $('.cookie2').css('display', 'none');
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
        removeCookie("name");
        removeCookie("pws");
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

})