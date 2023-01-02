console.log("jomobrain1");

let button = document.querySelector("button");
let notifications = document.querySelector(".notifications");


button.onclick = ()=>showToasts(' here is the toast message','success');

function showToasts(message,type){
    let toast = document.createElement("div");
    toast.innerText = message ? message : 'display if null';
  
    toast.classList.add("notify");
    toast.classList.add(type ? type: 'info')       
    notifications.append(toast);
   

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }