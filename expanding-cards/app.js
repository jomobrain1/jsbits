console.log("jomobrain1");
let cards=document.querySelectorAll(".card")
cards.forEach(card=>{   
    card.onclick=()=>{
       removeActive()
       card.classList.add('active')  
        
    }
})

function removeActive(){
    cards.forEach(card=>{
        card.classList.remove('active')
    })
}
