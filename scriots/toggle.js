
// cash-out none-block
document.getElementById('cash-out-sec').style.display='none';
document.getElementById('tranjection-sec').style.display='none';



document.getElementById('cash-out-toggle').addEventListener('click',function(){
document.getElementById('cash-out-sec').style.display='block';
document.getElementById('add-money-sec').style.display='none';
document.getElementById('tranjection-sec').style.display='none'


})

document.getElementById('add-money-toggle').addEventListener('click',function(){
    document.getElementById('cash-out-sec').style.display='none';
    document.getElementById('add-money-sec').style.display='block';
    document.getElementById('tranjection-sec').style.display='none'


})


document.getElementById('tranjection-toggle').addEventListener('click',function(){
    document.getElementById('tranjection-sec').style.display='block'
    document.getElementById('add-money-sec').style.display='none';
    document.getElementById('cash-out-sec').style.display='none';
})


