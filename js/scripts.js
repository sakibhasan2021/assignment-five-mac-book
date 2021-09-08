const extra16GbMemoryCost=180;
const ssd512GbStorage=100;
const ssd1TbStorage=180;
const extra8GbMemoryCost=0;
const deliveryChargeFee=20;


function updateTotalPrice(valueOfProduct){
     const totalPrice=document.getElementById('total-price-cost');
     const totalPriceValue=parseFloat(totalPrice.innerText); 
     totalPrice.innerText=totalPriceValue+valueOfProduct;
     const totalCost=document.getElementById('total-cost');
     totalCost.innerText=totalPriceValue+valueOfProduct; 
      
};

document.getElementById('16-gb').addEventListener('click',function(){
     const extraMemoryCost=document.getElementById('extra-memory-cost');
     extraMemoryCost.innerText=extra16GbMemoryCost;
     updateTotalPrice(extra16GbMemoryCost);

});

document.getElementById('8-gb').addEventListener('click',function(){
     const extraMemoryCost=document.getElementById('extra-memory-cost');
     extraMemoryCost.innerText=0;
      updateTotalPrice(extra8GbMemoryCost);
     
});
document.getElementById('256-gb-storage').addEventListener('click',function(){
     const extraStorageCost=document.getElementById('extra-storage-cost');
    extraStorageCost.innerText=0;
    updateTotalPrice(0);
   
})

document.getElementById('512-gb-storage').addEventListener('click',function(){
    const extraStorageCost=document.getElementById('extra-storage-cost');
    extraStorageCost.innerText=ssd512GbStorage;
    updateTotalPrice(ssd512GbStorage);
});



document.getElementById('1-TB-storage').addEventListener('click',function(){
     const extraStorageCost=document.getElementById('extra-storage-cost');
    extraStorageCost.innerText=ssd1TbStorage;
    updateTotalPrice(ssd1TbStorage);
});



// delivery section
document.getElementById('free-delivery').addEventListener('click',function(){
    const deliveryCharge=document.getElementById('delivery-charge-cost');
    deliveryCharge.innerText=0;
});


document.getElementById('paid-delivery').addEventListener('click',function(){
  
    const deliveryCharge=document.getElementById('delivery-charge-cost');
    deliveryCharge.innerText=20;
    updateTotalPrice(deliveryChargeFee);
});



// add promo code

document.getElementById('promo-button-apply').addEventListener('click',function(){
   const promoCode="stevekaku";
   const promoCodeInput=document.getElementById('promo-code');
   const userValue=promoCodeInput.value;
    if(promoCode==userValue){
       const totalCost=document.getElementById('total-cost');
       const offerValue=parseFloat(totalCost.innerText)/20;
       const newValue=totalCost.innerText-offerValue;
       totalCost.innerText=newValue;
       promoCodeInput.value="";
       document.getElementById('promo-code-message').style.display='none';
    }else {
        promoCodeInput.value="";
        document.getElementById('promo-code-message').style.display='block';
    }
});
