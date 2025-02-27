function cashOut(){
    const pin=document.getElementById('cash-out-pin-input').value ;
    const convertPin=parseInt(pin);
    const cashOutAmmount=document.getElementById('cash-out-ammount').value ;
    const convertCashOutAmmount=parseFloat(cashOutAmmount);
    const mainBalance=document.getElementById('main-balance');
    const convertMainBalance=parseFloat(mainBalance.innerText);

    if(convertPin===1234){
       const withdrawBlanace=convertMainBalance-convertCashOutAmmount;
       mainBalance.innerText=withdrawBlanace;

       const mainUl=document.getElementById('ul-main');
       const liList=tranjection(convertCashOutAmmount,'cash out');
       mainUl.appendChild(liList);
    }

    else{
        alert('incorrect pin');
    }
}