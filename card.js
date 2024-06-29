let tcola=document.getElementById("tcola");
let tcolb=document.getElementById("tcolb");
let iconA=document.querySelector(".fa-credit-card");
let center=document.querySelector(".center");
let iconc=document.querySelector(".fa-wallet");
let cdetails=document.querySelector(".cardDetails");
let totalamount=document.getElementById("totalamount");
function doFunc(){
    tcola.style.color="greenyellow";
    tcolb.style.color="#444";
    iconc.style.color="#444";
    iconA.style.color="greenyellow";
   
    cdetails.style.color="#444";
    cdetails.style.display="block";
    const cdetailsImg = document.getElementById("cdetailsImg");
   cdetailsImg.src = "qr.jpg";
   cdetailsImg.style.display = "none";
   center.style.display="block";
   const total = localStorage.getItem("tp");
   totalamount.innerText = total ? `Total Amount Rs.${total}` : "Total Amount Rs.0";

}
function doFunA(){
    tcola.style.color="#444";
    tcolb.style.color="greenyellow";
    iconc.style.color="greenyellow";
    iconA.style.color="#444";

    
    cdetails.style.color="#444";
   cdetails.style.display="none";
   const cdetailsImg = document.getElementById("cdetailsImg");
   cdetailsImg.src = "qr.jpg";
   cdetailsImg.style.display = "block";
   const total = localStorage.getItem("tp");
   console.log(total);
   totalamount.innerText = total ? `Total Amount Rs.${total}` : "Total Amount Rs.0";

}
let cnumber=document.getElementById("number");
cnumber.addEventListener('keyup',function(e){
    let num=cnumber.value;
    let newval='';
    num=num.replace(/\s/g,'');
    for(var i=0;i<num.length;i++){
        if(i%4==0 && i>0) newval.concat(' ');
        newval=newval.concat(num[i]);
        cnumber.value=newval;
    }
let ccnum=document.getElementById('c-number');
if(num.length<16){
    ccnum.style.border="1px solid red";
}
else{
    ccnum.style.border="1px solid green";
}
})
 
let edate=document.getElementById('e-date');
edate.addEventListener('keyup',function(e){
    let newinp=edate.value;
    if(e.which!=8){
        var numchar=e.target.value.length;
        if(numchar==2){
            var thisval=e.target.value;
            thisval+='/';
            e.target.value=thisval;
            console.log(thisval.length)

        }
    }
    if(newinp.length<5){
        edate.style.border="1px solid red";
    }
    else{
        edate.style.border="1px solid green";
    }
})
let cvv=document.getElementById('cvv'); 
cvv.addEventListener('keyup',function(e){
    let elen=cvv.value;
    let cvvbox=document.getElementById('cvv-box');
    if(elen.length<3){
        cvv.style.border="1px solid red";
    }
    else{
        cvv.style.border="1px solid green";
    }
})
