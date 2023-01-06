console.log('jomobrain1');

let panes=document.querySelectorAll('.container div')

panes.forEach(pane=>{
pane.onmouseenter=(e)=>{
    e.preventDefault();    
    pane.classList.add('width')
}
pane.onmouseleave=(e)=>{
    e.preventDefault();
    pane.classList.remove('width')   
}
    
})

