const submit=document.getElementById('submit');
const submitRead=document.querySelector('.submit-read');
const formRead=document.querySelector('.form-read');
const input=document.querySelectorAll('.input');
const cardName=document.querySelector('#name');
const cardNumber=document.querySelector('#number');
const number=document.querySelector('#card-number');
const expiredDate=document.querySelectorAll('.expired-date');
const cardCvc=document.querySelector('#cvc');
const cardCvcNumber=document.querySelector('#cvc-number');
const expiredName=document.querySelector('#expired-name');
 let regex=/\d/;
 let regex1=/[a-zA-Z]/;
submit.addEventListener('click',()=>
{
    if(cardName.value=='')
    {
        let div=document.createElement('div');
        div.classList.add('error!');
        div.innerHTML=`
        <p class='red'>Please enter the text</p>`;
        formRead.insertBefore(div,number);
    }
    if(regex.test(cardName.value))
    {
        let div=document.createElement('div');
        div.classList.add('error!');
        div.innerHTML=`
        <p class='red'>name cannot have numbers</p>`;
        formRead.insertBefore(div,number);

    }
    expiredDate.forEach((element)=>
    {
        if(element.value=='')
    {
        let div=document.createElement('div');
        div.classList.add('error!');
        div.innerHTML=`
        <p class='red expire'>can't be blank</p>`;
        formRead.insertBefore(div,submit);   
    }
    })
    
    if(regex1.test(cardNumber.value))
    {
        let div=document.createElement('div');
        div.classList.add('error!');
        div.innerHTML=`
        <p class="red">Wrong format, numbers only</p>`;
        formRead.insertBefore(div,expiredName);
    }
    if(cardCvcNumber.value=='')
    {
       let div=document.createElement('div');
        div.classList.add('error!');
        div.innerHTML=`
        <p class="red button">Can't be blank</p>`;
        formRead.insertBefore(div,submit); 
    }
    else
    {
        formRead.style.display='none';
        submitRead.style.display='block';
    }
})
const confirm=document.querySelector('#continue');
confirm.addEventListener('click',()=>
{
    submitRead.style.display='none';
    formRead.style.display='block';
    input.forEach((element)=>
    {
        element.value='';
    });
    expiredDate.forEach((element)=>
    {
        element.value='';
    });
})
