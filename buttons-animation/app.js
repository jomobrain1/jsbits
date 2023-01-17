let ripple=document.querySelector('.ripple')

ripple.onclick=(e)=>{
    let x=e.clientX
    let y=e.clientY
const buttonTop=e.target.offsetTop
const buttonLeft=e.target.offsetLeft

const xi=x-buttonLeft
const yi=y-buttonTop
const circle=document.createElement('span')
circle.classList.add('circle')
circle.style.top=yi + "px"
circle.style.left=xi + "px"
e.target.appendChild(circle)

}