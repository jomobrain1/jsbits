
let main=document.getElementById("main")
let codes=""

fetch("./code2.json")
.then(res=> res.json())
.then(data=>{

    data.forEach(item => {
     
  
    codes=`  
    
    <div class="codes">
    
      <section class="function">
       <p>
       <b>${item.id}</b>. 
       <span class="cd" id="title">
       ${item.title}
        <small class="title_comment">
       ${item.title_comment}
        </small>
       </span>
       </p>
      </section>
      <div class="code">
        <code class="cod">
        <span class="cd" id="cd">${item.code} </span>
         <span class="copy" id="copy">&#128203;</span>
        </code>
      </div>
   
     </div>
    
    `
    main.innerHTML +=codes
    });

})
function animateToast(){
let btn=document.createElement('button')
btn.innerHTML=" copied! "
btn.id="btn"
btn.style.cssText = `
background:#222831;
color:#ffff;
font-weight:600;
position: fixed;
width: 10rem;
border-radius: 5px;
top: 50px;
right: 30px;
animation: animateToast 500ms ease;
z-index:3;
`;
let h1=document.querySelector('h1')

h1.after(btn)
setTimeout(()=>{
 let btn= document.getElementById("btn")
 btn.style.display="none"
 
 let btns=document.querySelectorAll('#btn')
 for (let i = 0; i < btns.length; i++) {
 setTimeout(()=>{
  btns[i].style.display="none"
 },2200)
  
 }
},1000)
 
}


window.onload=()=>{

    setTimeout(()=>{
   let copy=document.querySelectorAll("#copy")
   
   
    for (let i = 0; i < copy.length; i++) {
      
        copy[i].onclick=(ev)=>{
          let copyText=ev.path[1].children[0]
          navigator.clipboard.writeText(copyText.innerHTML);
          
         
          setTimeout(animateToast,800)
          
         }
        
    }
    
     
    },1000)
}


function filterSearch(){

  let cards = document.querySelectorAll('.codes') 

  let search_query = document.getElementById("search").value;
  for (var i = 0; i < cards.length; i++) {
    
    let looped=cards[i].innerText.toLowerCase();
    
    if(  looped.includes(search_query.toLowerCase())) {        
        cards[i].classList.remove("is-hidden");
    } else {
     
      cards[i].classList.add("is-hidden");     
       
            }

   

  }
}

