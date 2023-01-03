console.log("jomobrain1");
let btn=document.querySelector('button')
let container=document.querySelector('.container')
let links=document.querySelectorAll('a')
let boxes=document.querySelectorAll('.box')
let i=0
btn.onclick=()=>{
    i++
    if(i > boxes.length){
        i=0
    }
    console.log(i*100);
    console.log(boxes.length);
    
    // box.style.transform = "translateY(-200vh)";
    container.style.transform = `translateY(-${i*100}vh)`;
    console.log(container);
}