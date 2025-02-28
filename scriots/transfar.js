function transfarBtn(){
    const transfarMoney=document.getElementById('transfar-money-input').value ;
    const convertTransfarMoney=parseFloat(transfarMoney);

    const transfarpin=document.getElementById('transfar-money-pin-input').value;
    const convertTransfarPin=parseInt(transfarpin);

    const mainBalance=document.getElementById('main-balance');
    const convertMainBalance=parseFloat(mainBalance.innerText);

    const modal=document.getElementById('my_modal_2');
    const showMoney=document.getElementById('show-money');

    const mainUl=document.getElementById('ul-main');

 

    if(convertTransfarPin===1234){
        const transfar=convertMainBalance-convertTransfarMoney;
        mainBalance.innerText=transfar;
        modal.showModal();
        showMoney.innerText=convertTransfarMoney;
        const list=tranjection(convertTransfarMoney,'transfar money');
        mainUl.appendChild(list);

    }

    else{
        alert('invalid pin')
    }
}