function addMoney(){
    const ammountInput=document.getElementById('amount-deposit-input').value ;
    const convertAmmountInput=parseFloat(ammountInput);
    const pinInput=document.getElementById('pin-input').value;
    const convertPin=parseInt(pinInput);
    const mainBalance=document.getElementById('main-balance');
    const convertMainBalance=parseFloat(mainBalance.innerText);

    if(convertPin===1234){
     const sum=convertMainBalance+convertAmmountInput;
      mainBalance.innerText=sum;
      const mainUl=document.getElementById('ul-main');
      const liList=tranjection(convertAmmountInput,'add money');
      mainUl.appendChild(liList);

       
    }

    else{
        alert('invalid pin');
    }
}