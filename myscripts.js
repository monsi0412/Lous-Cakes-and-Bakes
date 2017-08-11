
$(document).ready(function(){
    
$(function () {
  $('[data-toggle="popover"]').popover();
})

$(".pop-content").hide();

$(".checkout").popover({
  html:true,
  placement:"right",
  trigger:"click",
  content:function(){
      setTimeout(function () {
            $('.popover-content').fadeOut('slow');
        }, 2000);
      return $(".pop-content").html();
  }
});



$(".checkout").click(function(e){
    var form =e.currentTarget.parentElement;
    var input=$(form).find("input.qty")[0];
    var productName=$(form).find("input.productName")[0];
    var quantity= $(input).val();
    var imageSrc = e.currentTarget.offsetParent.firstElementChild.currentSrc;
    var name = $(productName).val();
    var getPrice= $(form).find("input.productPrice")[0];
    var price = $(getPrice).val();
    window.localStorage.setItem(name, quantity + "|" + imageSrc + "|" + price);
});



    
    
    
});