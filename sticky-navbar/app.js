console.log('jomobrain1');

let menu=document.querySelector('.menu')
let list=document.querySelector('nav ul')
let nav=document.querySelector('nav')

menu.onclick=()=>{
list.classList.toggle('active')
}

window.onscroll=(e)=>{

  if(window.scrollY > 400){
   nav.classList.add('sticky')
  }  
  if(window.scrollY< 100){
    nav.classList.remove('sticky')
  }
   
}
