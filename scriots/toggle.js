
//  all section none
document.getElementById('cash-out-sec').style.display='none';
document.getElementById('tranjection-sec').style.display='none';
document.getElementById('transfar-money-sec').style.display='none';
document.getElementById('get-bonus-sec').style.display='none';
document.getElementById('pay-bill-sec').style.display='none';

// cash-out section

document.getElementById('cash-out-toggle').addEventListener('click',function(){
document.getElementById('cash-out-sec').style.display='block';
document.getElementById('add-money-sec').style.display='none';
document.getElementById('transfar-money-sec').style.display='none';
document.getElementById('tranjection-sec').style.display='none'
document.getElementById('get-bonus-sec').style.display='none';
document.getElementById('pay-bill-sec').style.display='none';



})


// add money secttion

document.getElementById('add-money-toggle').addEventListener('click',function(){
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('add-money-sec').style.display='block';
    document.getElementById('transfar-money-sec').style.display='none';
    document.getElementById('tranjection-sec').style.display='none';
    document.getElementById('get-bonus-sec').style.display='none';
    document.getElementById('pay-bill-sec').style.display='none';



})

// transfar-money-section

document.getElementById('transfar-money-toggle').addEventListener('click',function(){
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('add-money-sec').style.display='none';
    document.getElementById('transfar-money-sec').style.display='block';
    document.getElementById('tranjection-sec').style.display='none'
    document.getElementById('get-bonus-sec').style.display='none';
    document.getElementById('pay-bill-sec').style.display='none';


    
})



// get-bonus-section

document.getElementById('get-bonus-toggle').addEventListener('click',function(){
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('add-money-sec').style.display='none';
    document.getElementById('transfar-money-sec').style.display='none';
    document.getElementById('tranjection-sec').style.display='none';
    document.getElementById('get-bonus-sec').style.display='block';
    document.getElementById('pay-bill-sec').style.display='none';

 
})


// pay-bill


    document.getElementById('pay-bill-toggle').addEventListener('click',function(){
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('add-money-sec').style.display='none';
    document.getElementById('transfar-money-sec').style.display='none';
    document.getElementById('tranjection-sec').style.display='none';
    document.getElementById('get-bonus-sec').style.display='none';
    document.getElementById('pay-bill-sec').style.display='block';

 
})









// tranjection section
document.getElementById('tranjection-toggle').addEventListener('click',function(){
    document.getElementById('tranjection-sec').style.display='block'
    document.getElementById('add-money-sec').style.display='none';
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('transfar-money-sec').style.display='none';
    document.getElementById('get-bonus-sec').style.display='none';
    document.getElementById('pay-bill-sec').style.display='none';



})


