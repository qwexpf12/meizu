$(function(){
    // 绑定事件
    function a(){
        $('.show-r-b i').click(function(event) {
        /* Act on the event */
            fals=this;
            // del盒子出现
            $('.del').css('display', 'block');
            $('.delda').css('display', 'block');
            //删除按钮
            $('.del .a1').click(function(event) {
                $('.del').css('display', 'none');
                $('.delda').css('display', 'none');
                $(fals).parent().css('display', 'none');
            });
            $('.del .a2').click(function(event) {
                $('.del').css('display', 'none');
                $('.delda').css('display', 'none');
            });
        });
    }
    a();
	// 点击删除的操作
	$('.show-r-b i').click(function(event) {
		/* Act on the event */
		fals=this;
		// del盒子出现
		$('.del').css('display', 'block');
		$('.delda').css('display', 'block');
		//删除按钮
		$('.del .a1').click(function(event) {
			$('.del').css('display', 'none');
			$('.delda').css('display', 'none');
			$(fals).parent().css('display', 'none');
		});
		$('.del .a2').click(function(event) {
			$('.del').css('display', 'none');
			$('.delda').css('display', 'none');
		});
	});
	// cookie的设置
	var a1=getCookie("name");
    var a2=getCookie("pws");
    $('.cookie3').html(getCookie("name"));
    if(a1!=""){
        $('.cookie1').css('display', 'none');
        $('.cookie2').css('display', 'block');
    };
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
	  $('.show-l .ul1 .a2').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
            open("dingdan.html");
        }
    }); 
    //创建盒子
    function b(){
        var a1=getCookie("shouji");
            if(a1!="")
            {
                var b1=decodeURI(a1);
                url="../img/58.png";
                $('.tianjia').append('<div class="show-r-b-1"><a href="javascript:;"><img src='+url+' alt="魅族 MX6"><h4>'+b1+'</h4></a><i></i></div>') 
                a();
            }
    }
    b();   	
})