const product=[
    {
        
        "id":"1",
        "productImg":"tomato.jpeg",
        "quantity":"1KG",
        "productName":"Tomato",
        "productPrice":"50",
         
    },
    {
        "id":"2",
        "productName":"spinach",
        "quantity":"1KG",
        "productPrice":"60",
         "productImg":"spinach.jpeg",
    },
    {
        "id":"3",
        "productName":"Brinjal",
        "quantity":"1KG",
        "productPrice":"60",
         "productImg":"brinjal.jpeg",
    },
    {
        "id":"4",
        "productName":"Ocra",
        "quantity":"1KG",
        "productPrice":"50",
         "productImg":"ocra.jpeg",
    },
    {
        "id":"5",
        "productName":"Cucumber",
        "quantity":"1KG",
        "productPrice":"100",
         "productImg":"Cucumber.jpeg",
    },
    {
        "id":"6",
        "productName":"Orange",
        "quantity":"1KG",
        "productPrice":"90",
         "productImg":"orange.jpeg",
    },
    {
        "id":"7",
        "productName":"cherries",
        "quantity":"1KG",
        "productPrice":"120",
         "productImg":"cherries.jpeg",
    },
    {
        "id":"8",
        "productName":"Papaya",
        "quantity":"1KG",
        "productPrice":"50",
         "productImg":"papaya.jpeg",
    },
    {
        "id":"9",
        "productName":"Mango",
        "quantity":"1KG",
        "productPrice":"120",
         "productImg":"Mango.jpeg",
    },
    {
        "id":"10",
        "productName":"blue berry",
        "quantity":"1KG",
        "productPrice":"90",
         "productImg":"blueberry.jpeg",
    },
    {
        "id":"11",
        "productName":"pumpkin seeds",
        "quantity":"250G",
        "productPrice":"190",
         "productImg":"pumpkinseeds.jpeg",
    },
    {
        "id":"12",
        "productName":"White Sesame Seeds",
        "quantity":"100G",
        "productPrice":"200",
         "productImg":"whitesesameseeds.jpeg",
    },
    {
        "id":"13",
        "productName":"Tomato seeds",
        "quantity":"500G",
        "productPrice":"250",
         "productImg":"tomatoseeds.jpeg",
    },
    {
        "id":"14",
        "productName":"Mung bean",
        "quantity":"250G",
        "productPrice":"190",
         "productImg":"mungbean.jpeg",
    },
    {
        "id":"15",
        "productName":"Chick pea",
        "quantity":"250G",
        "productPrice":"290",
         "productImg":"chickpeaseeds.jpeg",
    },



]
let login=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    cartContainer.classList.remove("showCartContainer");
}
const shoppingCart = document.getElementById("shoppingCart");
const closeCart = document.getElementById("closeCart");


const cartContainer = document.getElementById("cartContainer");
const eachCartItemContainer = document.getElementById("eachCartItemContainer");
const totalItem = document.getElementById("totalItem");

const cartTitle = document.getElementById("cartTitle")
const totalPrice = document.getElementById("totalPrice");
const totalPriceContainer = document.getElementById("totalPriceContainer");
const checkOut=document.getElementById("checkOut-btn");

const storedItems = localStorage.getItem("cartItems") 
const cartItems = storedItems !== null 
               ?storedItems.split(",")
               :[]


totalItem.innerText = cartItems.length !== null
                        ? cartItems.length-1
                        :0


document.addEventListener("DOMContentLoaded", () => {
const itemContainer=document.getElementById("itemContainer");
for(let index=0;index<product.length;index++){
    const {id, productName,quantity, productPrice, productImg}=product[index];
   itemContainer.innerHTML+=
   `<div class="card">`+
   `<article class="cardImg">`+
       `<img src="${productImg}" alt=""></article>`+
   `<div class="itemDescContainer">`+
       `<div class="itemDesc">`+
          `<h1 class="itemName">${productName}</h1>`+
           `<p class="itemPrice">Rs.${productPrice}</p>`+
           `<p class="qnuatity">Quantity:${quantity}`+
       `</div>`+
       `<div class="addtocart" id=addtocart${id}>`+
           `<i class="fa-solid fa-cart-shopping cart"></i>`+               
       `</div>`+
   `</div>`+
`</div>`;  
}

for(let index=1;index<=product.length;index++){
document.getElementById(`addtocart${index}`).addEventListener("click", () => {
    if(cartItems.includes(index) === false){
        totalItem.innerText = cartItems.length;
    cartItems.unshift(index);
   
  localStorage.setItem("cartItems",cartItems)
    }
});
}
});

    shoppingCart.onclick = () => {
        console.log('Shopping cart icon clicked'); // Debugging line
        login.classList.remove('active');
        cartContainer.classList.toggle("showCartContainer");
        displayCartItem();
    };

    closeCart.onclick = () => {
        console.log('Close cart clicked'); // Debugging line
        cartContainer.classList.remove("showCartContainer");
    };
const displayCartItem= () =>{
    eachCartItemContainer.innerHTML="";
    if(localStorage.getItem("cartItems")){
        cartTitle.innerText=`${cartItems.length-1} Items in cart`;
        totalPriceContainer.style.display="block";
        const cartArray=localStorage.getItem("cartItems").split(",");
        product.map((item) => {
            const{id, productName,quantity, productPrice, productImg}=item;
            if(cartArray.includes(id)){
                totalPrice.innerHTML=Number(totalPrice.innerText)+Number(productPrice);
                console.log(document.getElementById("totalPrice").innerText);
                let tp = document.getElementById("totalPrice").innerText;
    localStorage.setItem("tp", tp);
                return eachCartItemContainer.innerHTML+=
                `<div class="eachCart">`+
				`<img src="${productImg}" alt="" class="cartImg">`+
				`<div class="cartDesc">`+ 
					`<h1 class="cartIemName" id="cartIemName" name="productName">${productName}</h1>`+
					`<p class="cartItemPrice" id="cartItemPrice" name="price">Rs.${productPrice}</p>`+
                    `<p class="qnuatity" name="quantity">Quantity:${quantity}`+
					`<button class="remove" id="remove${id}">Remove</button>`+
				`</div>`+
			`</div>`;
            }
        })
    }
    else{
        cartTitle.innerText=`No Items`;
        totalPriceContainer.style.display="none";

    }
    onRemoveButton();
}
const onRemoveButton = () => {
    const itemInCart = localStorage.getItem("cartItems");
    const itemInCartArray = itemInCart.split(",");
      
    for(let index=0; index<itemInCartArray.length;index++){
        const removedItem =  itemInCartArray[index]
        document.getElementById(`remove${removedItem}`).onclick=()=>{
            
            const Itemindex = itemInCartArray.indexOf(removedItem);
            cartItems.splice(Itemindex,1);
            localStorage.setItem("cartItems",cartItems)
            totalItem.innerText = cartItems.length -1;
            totalPrice.innerText=0;
            displayCartItem();
        }
    }
}

    
    
