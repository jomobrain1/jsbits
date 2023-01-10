console.log('jomobrain1');
let compileBtn=document.getElementById('compile-btn')
let output=document.getElementById('output')
let htmlCode=document.getElementById('html-code')
let cssCode=document.getElementById('css-code')
let jsCode=document.getElementById('js-code')
let style=document.getElementById('style')
let js=document.getElementById('js')

compileBtn.onclick=(field,event)=>{
    console.log('clicked');
    output.innerHTML=htmlCode.value
    style.innerHTML=cssCode.value
    js.innerHTML=jsCode.value
    console.log(htmlCode.value);
    
}
