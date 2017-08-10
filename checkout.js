/* global $*/

$(document).ready(function(){
    
    
    
    // console.log(window.localStorage);
    for (var i = 0; i < window.localStorage.length; i++){
        // $('body').append(window.localStorage.getItem(window.localStorage.key(i)));
        console.log(window.localStorage.getItem(window.localStorage.key(i)));
        console.log(window.localStorage.key(i));
        var values = window.localStorage.getItem(window.localStorage.key(i)).split("|");
        var quantity = values[0];
        var imgSrc = values[1];
        var row='<div class="row"><div class="col-md-1"></div><div class="col-md-4"><img src="' +
        imgSrc +
        '" class="img-thumbnail"></div><div class="col-md-3 orderSumDes"><h3>' + 
            window.localStorage.key(i) +
        '</h3></div><div class="col-md-3 orderSumDes"><p>quantity: ' +
            quantity +
        '</p><p>price:</p></div><div class="col-md-1"></div></div>';
        
        $("#orderSummary").append(row);
    }
    

    
    
    
});