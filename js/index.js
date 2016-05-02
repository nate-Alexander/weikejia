$(function(){
var serves=$('.serves');
var reson=$('.reson');
var partitem=$('.part-item');
var chat=$('.chat');
var by=$('.by');
var serscrollTop=serves.offset().top;
var resonscrollTop=reson.offset().top;
var partitemscrollTop=partitem.offset().top;
var chatscrollTop=chat.offset().top;
var byscrollTop=by.offset().top;
var s1=0;
var s2=0;
var s3=0;
var bescroll = $(document).scrollTop();
$("img.lazy").lazyload({
    effect : "fadeIn"
});
function ss(){
$(window).scroll(function(){
 var afscroll = $(document).scrollTop();

 var res = afscroll - bescroll; 
 bescroll=afscroll
 if(res>0){

  if(afscroll>(serscrollTop-500)&&afscroll<resonscrollTop){ 
    s1+=5;
 serves.css({backgroundPosition:'100%'+-s1+'px'}) 
  }
   if(afscroll>(resonscrollTop)&&afscroll<partitemscrollTop){ 
    s2+=8;
 partitem.css({backgroundPosition:'100%'+(-s2+-591)+'px'}) 
  }
  if(afscroll>(byscrollTop-500)){
  s3+=4;
  by.css({backgroundPosition:'100%'+(-s3+-1044)+'px'}) 
  }


 }else if(res<0){

  if(afscroll>(serscrollTop-500)&&afscroll<resonscrollTop){
    s1-=5;
 serves.css({backgroundPosition:'100%'+-s1+'px'}) 
  }
   if(afscroll>(resonscrollTop)&&afscroll<(partitemscrollTop)){ 
    s2-=8;
 partitem.css({backgroundPosition:'100%'+(-s2+-591)+'px'}) 
  }
if(afscroll>(byscrollTop)&&afscroll<(byscrollTop+600)){ 
    s3-=11;
 by.css({backgroundPosition:'100%'+(-s3+-1044)+'px'}) 
  }
 }
});
}
ss();



})