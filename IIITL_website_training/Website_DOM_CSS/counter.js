var cnt=0;
const l1=document.querySelector(".cnt_val");
const incr = document.getElementById("increment_val");
const decr=document.getElementById("decrement_val");

function increment(){
    
    cnt=cnt+1;
    l1.textContent=cnt;
}

function decrement(){
    
    cnt=cnt-1;
    l1.textContent=cnt;
}
