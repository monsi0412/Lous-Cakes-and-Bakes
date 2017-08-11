/* global $*/

$(document).ready(function(){
    
    var Total =0;
    for (var i = 0; i < window.localStorage.length; i++){
        var values = window.localStorage.getItem(window.localStorage.key(i)).split("|");
        var quantity = values[0];
        var imgSrc = values[1];
        var price = values[2];
        var row='<div class="row orderRows"><div class="col-md-1"></div><div class="col-md-4"><img src="' +
        imgSrc +
        '" class="img-thumbnail"></div><div class="col-md-3 orderSumDes"><h3>' + 
            window.localStorage.key(i) +
        '</h3></div><div class="col-md-3 orderSumDes"><p>quantity: ' +
            quantity +
        '</p><p>price: $' +
            price +
        '</p><p><button id="removeItem">remove</button></p></div><div class="col-md-1 orderSumDes"><p><button class="qtyPlus">+</button></p><p><button class="qtyMinus">-</button></p></div></div>';
        
        $("#orderSummary").append(row);
        var rowTotal = quantity * price;
        Total =  Total + rowTotal;
    }
    
    
    
    
    // remove item when this button is clicked
    // $("#removeItem").click(function(){
        // var wantRemove=window.getItem( quantity + "|" + imageSrc + "|" + price);
        // console.log(wantRemove);
        
    // });
    
    // add or subtract from quantity when clicked
    // $(".qtyPlus").click(function(){
    //     quantity=quantity +1;
    // });
    // $(".qtyMinus").click(function(){
    //     quantity=quantity-1;
    // });
    
    
    
    var finalTotal = Total;

    $("#orderTotal").append(finalTotal + ".00");
    $("#checkoutClose").click(function(){
        window.localStorage.clear();
        window.location.reload();
    });
    
    
    
    
    
    

    
    // <p><button class="qtyPlus">+</button></p><p><button class="qtyMinus">-</button></p>
});