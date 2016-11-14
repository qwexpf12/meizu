	$(function(){
		//判断手机号是否合适
		var flag1=false;
		var flag2=false;
		var flag3=false;
		var flag4=false;


		var url="../json/a.json";
		$.ajax({
                type:"get",
                url:url,
                success: function (response,status,xhr) {
                    if (status == "success") {
	                    var arr =response;//eval("("+response+")");
	                    // for(var j=0;j<arr.length;j++)
	                    // {
                     //    	var obj=arr[j];
                     //    	var user=obj.user;
                     //    	var pws=obj.pass;
                     //    }
                    var user=arr.user;
                    var pws=arr.pass;
		                    var reg=/^[a-zA-Z]\w{5,17}$/;
							$(".input2").blur(function(event) {
								var b=$(".input2").val();
								if(!reg.test(b)){
									alert("密码不符合");
									flag1=false;
								}
								else{
									if(b==pws){
										flag2=true;
									}
								}
							});
		                    console.log(user);
		                    // var pws=obj.pass;
		                    var str=$(".input1");
							str.blur(function(){
								var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
								var reg=/^[a-zA-Z]\w{5,17}$/;
								var a=$(this).val();
								if(!myreg.test(a)){
								 alert("用户名不符合规则");
								  flag1=false;
								} 
								else{
									if(a==user){
										 flag1=true;
									}
								}
							})
		                        console.log(pws);
	                    
                    }
                },
                error: function () {
                    alert("异步请求出问题");
                },
                beforeSend: function () {

                }
            })
		////判断密码是否合适
		$(".a4").click(function(event) {
			if(flag2&&flag1){
				
				var date = new Date();
            	date.setDate(date.getDate()+10);
        	 
                setCookie("name",$(".input1").val(),date);
                setCookie("pws",$(".input2").val(),date);
                // alert($('.input1').val());
                // alert($('.input2').val());
                open("index.html");
			}
		});
		// 设置cookie
		var a1=getCookie("name");
		// alert(a1);
		var a2=getCookie("pws");
		$('.input1').val(a1);
		$('.input2').val(a2);
		var c=$(".input2").val();
		var d=$(".input1").val();
		if(c==a1){
			 flag1=true;
		}
		if(d==a2){
			 flag1=true;
		}
		console.log(c);
		console.log(d);
		console.log(a1);
		console.log(a2);
			$(".a4").click(function(event) {
			if(flag2&&flag1){
				
				var date = new Date();
            	date.setDate(date.getDate()+10);
        	 
                setCookie("name",$(".input1").val(),date);
                setCookie("pws",$(".input2").val(),date);
                // alert($('.input1').val());
                // alert($('.input2').val());
                open("index.html");
			}
			});
		//调用滑动条
		$('#drag').drag();
		//出现二维码
		$(".a5").mouseover(function(event) {
			$(".qrCodePanel_arrow1").css("display","block");
		});
		//隐藏二维码
		$(document).click(function(){
			$(".qrCodePanel_arrow1").css("display","none");
		})
	})