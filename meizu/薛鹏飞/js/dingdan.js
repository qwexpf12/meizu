$(function(){
	$('.show-r-t ul li a').click(function(event) {
		$('.show-r-t ul li a').css({"color":"#515151","border-width":"0px","border-color":"#515151"});
		$(this).css({"color":"#00c3f5","border-width":"2px","border-color":"#00c3f5","border-bottom-style":"solid"});
	});
	//出现详细的盒子
	  var b=0;
    $(".show-r-t ul li").click(function(event) {
    	console.log($(".show-r-t ul li"));
        b=$(this).index();
        $(".show-r-b-1").css('display', 'none');
        $(".show-r-b-1").eq(b).css('display', 'block');
    });
    
    var a = $('.show-r-b-1-3').find('.show-r-b-1-a').size();
    console.log(a);
    $('.show-r-t .a3 i').html(a);
    ///////////////取消订单的js/////////////////////////
    $('.show-r-b-1-a-b-2 .a1').click(function(event) {
		/* Act on the event */
		fals=this;
		$('.del').css('display', 'block');
		$('.delda').css('display', 'block');
		 // var a = $('.show-r-b-1-3').find('.show-r-b-1-a').size();

		$('.del .a2').click(function(event) {
			$('.del').css('display', 'none');
			$('.delda').css('display', 'none');
		});
	});
	// 删除层的操作
	$('.del .a1').click(function(event) {
		$('.del').css('display', 'none');
		$('.delda').css('display', 'none');
		  a= a -1;
	    $('.show-r-t .a3 i').html(a);
		$(fals).parent().parent().parent().css('display', 'none');
		return false;
	});
	  // cookie的设置
    var a1=getCookie("name");
    var a2=getCookie("pws");
    $('.cookie3').html(getCookie("name"));
    if(a1!=""){
        $('.cookie1').css('display', 'none');
        $('.cookie2').css('display', 'block');
    }
    
     $('.show-l .ul1 .a2').click(function(event) {
       var a3=getCookie("name");
        if(a3==""){
            alert("请先登陆");
        }
        else{
            open("shoucang.html");
        }
    });       
})