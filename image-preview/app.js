console.log('jomobrain1');
let img=document.querySelector('img')


function previewImage(event){

    console.log(URL.createObjectURL(event.target.files[0]));
    img.src = URL.createObjectURL(event.target.files[0]);
     img.onload = function() {
        URL.revokeObjectURL(img.src) // free memory
      }
}