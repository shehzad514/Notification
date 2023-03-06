var count=document.querySelector('#count');
var countNumber=count.innerHTML;
var number =parseInt(countNumber);

const sms =document.querySelectorAll('.sms');

//for change the background color
sms.forEach(s =>
    {
        s.addEventListener("click", ()=>
        {
            if(!s.classList.contains('open'))
            {
             number=number-1;
             count.innerHTML=number;
            }
           s.style.backgroundColor="white";
           s.classList.add('open');
           
        })
    } )


 //for private sms   
const msgg=document.querySelector('#msgg');
const msg=document.querySelector('#msg');
msgg.addEventListener('click', ()=>
{
    msg.style.display="flex";
})

//for mark all read
const mark= document.querySelector('.read');
mark.addEventListener("click", ()=>
{
    sms.forEach(s=>
        {
            s.style.backgroundColor="white";
            count.innerHTML="0";
        })
})




