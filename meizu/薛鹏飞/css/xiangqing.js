$(function(){
     var n=0;
            var m=$(".show-l-t ul li").length;
            $(".show-l-t ol li").click(function() {
                $(".show-l-t ol li").attr('class', "");  
                $(this).attr('class', 'active');
                $(".show-l-t ul li").stop().fadeTo(300, 0);
                $(".show-l-t ul li").eq($(this).index()).stop().fadeTo(300, 1);
                n=$(this).index();
            });
            var timer=setInterval(function(){
                $(".show-l-t ul li").stop().fadeTo(300, 0);
                $(".show-l-t ul li").eq(n).stop().fadeTo(300, 1);
                // $(".show-l-t ol li").attr('class', "");  
                // $(".show-l-t ol li").eq(n).attr('class', 'active');

                n++;
                if(n>=m)
                {
                    n=0;
                }
            },3000)
            $(".show-l-t ul li").mouseout(function(event) {
                $(".lunbo1-l").css('background', '');
                $(".lunbo1-r").css('background', '');
                timer=setInterval(function(){
                    $(".show-l-t ul li").stop().fadeTo(300, 0);
                    $(".show-l-t ul li").eq(n).stop().fadeTo(300, 1);
                    $(".show-l-t ol li").attr('class', "");  
                    $(".show-l-t ol li").eq(n).attr('class', 'active');
                    n++;
                    if(n>=m)
                    {
                        n=0;
                    }
                },3000)
            });

})