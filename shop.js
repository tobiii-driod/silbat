// cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active"); 
};

//close cart
closeCart.onclick = () => {
    cart.classList.remove("active"); 
};
//cart workinhg js


if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);

} else{
    ready();
}

//making function

function ready(){
    //remove items from cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove');
    console.log (reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++){
        var button = (reomveCartButtons)[i];
        button.addEventListener('click', removeCartItem);  
    }
    // quantity changes
    var quantityInputs= document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input= quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }
    //add to cart
    var addcart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addcart.length; i++){
        var button= addcart[i];
        button.addEventListener("click", addcartClicked);
         
    }
}

//remove items from cart
function removeCartItem(event) {
    var buttonClicked= event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
 }
 //quantity changes
 function quantityChanged(event){
     var input=event.target;
     if (isNaN(input.value) || input.value <= 0){
        input.value=1;
     }
     updatetotal();
 }
//add to cart
function addcartClicked(event){
    var button = event.target;
    var shopProducts= button.parentElement;
    var title =shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductTocart( title,price ,productImg);
    updatetotal();
}
function addProductTocart(title, price,productImg){

    var cartShopBox = document.createElement("div");

    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
     for (var i=0; i < cartItemsNames.length; i++){
    alert("You have already added this item");
}
}



 // update Total

 function updatetotal(){
     var cartContent = document.getElementsByClassName("cart-content")[0];
     var cartboxes = document.getElementsByClassName("cart-box");
     var total =0;
     for (var i = 0; i <cartboxes.length; i++){
         var cartBox= cartboxes[i];
         var priceElement = cartBox.getElementsByClassName ('cart-price')[0];
         var quantityElement = cartBox.getElementsByClassName ('cart-quantity')[0];
         var price= parseFloat(priceElement.innerText.replace("$", "" ));
         var quantity = quantityElement.value;
         total= total + (price * quantity);
         //if price contain some cents value
         total= Math.round(total *100)/100;
         document.getElementsByClassName('total-price')[0].innerText='$' + total;
     }
 }