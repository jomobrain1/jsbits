console.log('jomobrain1');
let accordLink=document.querySelectorAll('.accordion-link')

accordLink.forEach(ac=>{
    ac.onclick=(e)=>{
        let btn=e.path[2].children[1]
        btn.classList.toggle('none') 
    }
})
