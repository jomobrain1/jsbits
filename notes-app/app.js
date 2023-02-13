let addBtn=document.querySelector('.add-note')
let notesContainer=document.querySelector('.notes')


getNotes()

// onclicking note Button
addBtn.onclick=()=>{
    let textarea=document.createElement('textarea')
    textarea.classList.add('note')
    notesContainer.append(textarea)
    textarea.onchange=()=>{
       
    }

}

getNotes().forEach(note => {       
    let textarea=document.createElement('textarea')   
    textarea.value=note.content 

    notesContainer.append(textarea)
    let areas=document.querySelectorAll('textarea')
    areas.forEach(area => {
        area.onchange=(e)=>{
            
            console.log(e.target.value,   getNotes());
            let newobj={
                id:Math.floor(Math.random()*10000),
                content:e.target.value
            }
            getNotes().push(newobj)
        console.log('new',getNotes());         
        }
    });
    console.log(areas);
});

function getNotes(){
    let notes=JSON.parse(localStorage.getItem('notes'))   
  
    return notes
}