/*global $*/

$(document).ready(function(){
    
$(".checkout").click(function(){
    var quantity = $(".qty").val();
    console.log(quantity);
    console.log(2+2);
    $("#orderSummary").append("<p>"+quantity+"</p>");
});
    
    
    
    
    
    
});