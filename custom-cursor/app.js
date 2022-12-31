console.log('jomobrain1');

let cursor=document.querySelector('.cursor')

document.onmousemove=(e)=>{
    // e.preventDefault()
    cursor.style.top=(e.pageY-100)+"px"
    cursor.style.left=(e.pageX-10)+"px"



}