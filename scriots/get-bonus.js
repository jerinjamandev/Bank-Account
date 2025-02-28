function getBonusBtn(){
const getBonusInput=document.getElementById('get-bonus-input').value ;
console.log(getBonusInput);
const mainBalance=document.getElementById('main-balance');
const convertMainBalance=parseFloat(mainBalance.innerText);
const modal=document.getElementById('my_modal_3');

 
if(getBonusInput==="New Ramadan-2025 🌙"){
   const sum=convertMainBalance+1000;
   mainBalance.innerText=sum;
   modal.showModal();
}
else if(getBonusInput==='Ramadan Mubarak-2025 🌙'){
    const sum=convertMainBalance+1500;
    mainBalance.innerText=sum;
    modal.showModal();
}

else{
    alert('invalid cupon');
}
}