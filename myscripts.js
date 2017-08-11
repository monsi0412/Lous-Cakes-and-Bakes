/*global $*/

$(document).ready(function(){
    
    

    
$(".checkout").click(function(e){
    var form =e.currentTarget.parentElement;
    var input=$(form).find("input.qty")[0];
    var productName=$(form).find("input.productName")[0];
    var quantity= $(input).val();
    var imageSrc = e.currentTarget.offsetParent.firstElementChild.currentSrc;
    var name = $(productName).val();
    var getPrice= $(form).find("input.productPrice")[0];
    var price = $(getPrice).val();
    // console.log(quantity);
    // console.log(name);
    // console.log(imageSrc);
    // console.log(price);
    window.localStorage.setItem(name, quantity + "|" + imageSrc + "|" + price);
});


    
    
    
});