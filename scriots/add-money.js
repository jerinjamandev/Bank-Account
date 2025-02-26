document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const ammountInput=document.getElementById('amount-deposit-input').value ;
    const convertAmmountInput=parseFloat(ammountInput);
    const pinInput=document.getElementById('pin-input').value;
    const convertPin=parseInt(pinInput);
    const mainBalance=document.getElementById('main-balance');
    const convertMainBalance=parseFloat(mainBalance.innerText);

    if(convertPin===1234){
     const sum=convertMainBalance+convertAmmountInput;
      mainBalance.innerText=sum;
       
    }

    else{
        alert('invalid pin');
    }
})