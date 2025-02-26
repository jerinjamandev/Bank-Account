document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();       
    const digitId=document.getElementById('digit-id').value;
    const mobileNumberId=document.getElementById('mobile-number-id').value;
    console.log(digitId,mobileNumberId);
    const convertDigitText=parseInt(digitId);
    if(mobileNumberId.length===11){
        // pin conditio
        if(convertDigitText===1234){
           window.location.href='./main.html'
        }

    else{
       alert('incorrect pin');
    }

    }

    else{
       alert('valid digit') ;
    }
})