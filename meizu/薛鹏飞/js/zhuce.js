 onload=function(){
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
}
$(function(){
    //出现账号规范
    $(".input1").focus(function(event) {
        $(".box3").css("display", "block");
    });
    //隐藏账号规范
    $(".input1").blur(function(event) {
        $(".box3").css("display", "none");
    });
    //出现密码规范
    $(".input2").focus(function(event) {
        $(".box4").css("display", "block");
    });
    //隐藏密码规范
    $(".input2").blur(function(event) {
        $(".box4").css("display", "none");
    });
    //判断账号是否合适         
    // 
    var flag1=false;
    var flag2=false;
    var flag3=false;
    var flag4=false;
    var reg=/^[a-zA-z][a-zA-Z0-9_]{4,32}$/;
    $(".input1").blur(function(event) {
        var b=$(".input1").val();
        if(!reg.test(b)){
            alert("账号不符合");
            flag1=false;
        }
        else{
            flag2=true;
        }
    });
    //密码是否合适
    var str=$(".input2");
        str.blur(function(){
            var myreg = /^[0-9a-zA-Z!@#$^]{6,18}$/; 
            var a=$(this).val();
            if(!myreg.test(a)){
             alert("密码不符合规范");
              flag1=false;
            } 
            else{
                flag1=true;
            }
        })
     //验证码判断

    $('.input4').blur(function(event) {
        /* Act on the event */
        var d=$('#input9').val();
        var e=$('.input4').val();
        if(d==e){
             flag4=true;
        }   
    });

    //邮箱的验证
        var c=/(\S)+[@]{1}(\S)+[.]{1}(\w)+/; 
        $(".input3").blur(function(event) {
        var c1=$(".input3").val();
        if(!c.test(c1)){
            alert("邮箱不符合规范");
            flag3=false;
        }
        else{

            flag3=true;
        }
        // console.log(flag3);
        // console.log(flag2);
        // console.log(flag1);
        //  console.log(flag4);
    });
    var d=$('.input9').val();
    var e=$('.input4').val();
    if(d==e){
         flag4=true;
    }
    //设置注册oookie
     $(".a4").click(function(event) {
        if(flag2&&flag1&&flag3&&flag4){
            
            var date = new Date();
            date.setDate(date.getDate()+10);
         
            setCookie("name",$(".input1").val(),date);
            setCookie("pws",$(".input2").val(),date);
            // alert($('.input1').val());
            // alert($('.input2').val());
            open("index.html");
        }
    });
})