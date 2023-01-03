const animatedBoxes=document.querySelectorAll('.animated-box')

window.onscroll=()=>{
    let animationPoint=window.innerHeight / 6 * 4

animatedBoxes.forEach(box=>{
  let distanceFromTop=box.getBoundingClientRect().top
  if(distanceFromTop<animationPoint){
    box.classList.add('show')
  }  else{
    box.classList.remove('show')
  }
})
}