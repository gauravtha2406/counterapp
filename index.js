let btns=document.querySelectorAll('.btn');
let counter=document.querySelector("#counter");
let count=0;

btns.forEach((item)=>{
    console.log(item);
    item.addEventListener("click",(e)=>{
        const b=e.currentTarget.classList;
        console.log(b);
        if(b.contains('increase')){
            count++;
        }
       else if(b.contains('decrease')){
           count--;
       }
       else{
           count=0;
       }
      if(count>0){
          counter.style.color="green";
      }
      if(count<0){
          counter.style.color="red";
      }
      if(count==0){
          counter.style.color="black";
      }

      counter.textContent=count;
    })
    
    
    })
