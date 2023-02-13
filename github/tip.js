
let tipContainer=document.getElementById("tipContainer")
let code=""

fetch("./tip.json")
.then(res=> res.json())
.then(data=>{

    data.forEach(item => {  
        
    code=`  
  
    <section class="tipBox">
      <h1> ${item.id} </h1>
      <p class="tip">  ${item.tip}   </p>
      <b class="why"> ${item.why} </b>
      <p class="solution"> ${item.solution} </p>
    </section>
  </div>
    
    `
    tipContainer.innerHTML +=code
    });

})
