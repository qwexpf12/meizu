$(function(){
	function a(){
		//编辑盒子
		$('.dizi-b .a2').click(function(event) {
			/* Act on the event */
			$(this).parent().parent().css('display', 'none');
		});
	}
	// 创建一个盒子
	$('.add-1-1 .a2').click(function(event) {
		$('.tianjia').append('<div class="dizi-c"><div class="dizi-c-t"><h6>'+$('.add-1-1 .a1').val()+'</h6><p>'+$('.add-1-1 .a5').val()+'</p></div><div class="dizi-c-b"><p>'+$('#cmbProvince').val()+''+$('#cmbCity').val()+''+$('#cmbArea').val()+''+$('.a4').val()+'</p></div><div class="dizi-b"><a href="javascript:;" class="a1">修改</a><a href="javascript:;" class="a2">删除</a></div>')
		a();
	});
	a();
	//对盒子进行隐藏和显示的设置 
	$('.dizi-c').click(function(event) {
		$('.dizi-c').css("border-color","#e4e4e4");
		$('.dizi-c').find('.dizi-b').css('display', 'none');
		$(this).css("border-color","#00c3f5");
		$(this).find('.dizi-b').css('display', 'block');
		a();
	});
	// $('.dizi-c').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
	// 	$('.dizi-c').css("border-color","#e4e4e4");
	// 	$(this).css("border-color","#00c3f5");

	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	// $('.dizi-c').css("border-color","#e4e4e4");
	// });
	//编辑盒子
	$('.dizi-b .a2').click(function(event) {
		/* Act on the event */
		$(this).parent().parent().css('display', 'none');
	});
	// 修改地址
	$('.dizi-b .a1').click(function(event) {
		var e=$(this).parent().parent();		
		$('.add-1').stop().slideToggle(400);
		var a=e.find('h6').html();
		var b=e.find('.dizi-c-t').find('p').html();
		var c=$('.add-1-1 .at1').val(a);
		var d=$('.add-1-1 .at2').val(b);
		$('.add-1-1 .a2').click(function(event) {
			/* Act on the event */
			e.replaceAll('<div class="dizi-c"><div class="dizi-c-t"><h6>'+a+'</h6><p>'+b+'</p></div><div class="dizi-c-b"><p>'+$('#cmbProvince').val()+''+$('#cmbCity').val()+''+$('#cmbArea').val()+''+$('.a4').val()+'</p></div><div class="dizi-b"><a href="javascript:;" class="a1">修改</a><a href="javascript:;" class="a2">删除</a></div>')
		});
	});
	$('.add-1-1 a3').click(function(event) {
		/* Act on the event */
		$('.add-1').stop().slideUp(400);
	});
	//出现地址添加页面
	$('.add p').click(function(event) {
		$('.add-1').stop().slideToggle(400);
	});
	$('.add-1-1 .a3').click(function(event) {
		/* Act on the event */
		$('.add-1').stop().slideUp(400);
	});
	    //生成验证码
    var input9=document.getElementById("input9")
    input9.value=generate4();
    var yan1=input9.value;
    input9.onclick = function (){
    input9.value = generate4();
    }
    function generate4() {
            var  arr2=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];
            var result = [];
            for(var i=1;i<=4;i++){
                var index = Math.floor(Math.random()*arr2.length);
                result.push(arr2[index]);
            }
            var sum = "";
            for(var i=0;i<result.length;i++){
                sum += result[i];
            }
            return sum;
        }
          $(".input1").focus(function(event) {
        $("box3").css("display", "block");
    });
      // cookie的设置
    var a1=getCookie("name");
    var a2=getCookie("pws");
    $('.cookie3').html(getCookie("name"));
    if(a1!=""){
        $('.cookie1').css('display', 'none');
        $('.cookie2').css('display', 'block');
    }    
})