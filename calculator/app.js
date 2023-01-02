console.log('jomobrain1');
let btns=document.querySelectorAll('p')
let output=document.querySelector('.output')
let equal=document.querySelector('.equal')
let del=document.querySelector('.delete')

btns.forEach(btn=>{
    btn.onclick=(e)=>{
       output.innerText+=e.target.innerText
    //    console.log(e.target.innerText);
    }
})

equal.onclick=()=>{
    try {
        console.log( eval(output.innerText)); 
        output.innerText=eval(output.innerText) 
    } catch (error) {
        if(error){
            output.innerText="! Error !"  
            output.classList.add('error')      
        }
        console.log(error);
    }
 
}
del.onclick=()=>{    
    output.innerText= output.innerText.slice(0,-1)
}