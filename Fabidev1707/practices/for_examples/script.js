const inputTexto=document.getElementById("text");
const inputcicles=document.getElementById("cicle");
const output=document.getElementById("output");
const btnShow=document.getElementById("btnshow");

btnShow.addEventListener("click",e=>{
    e.preventDefault();

    output.innerHTML="";

    let text=inputTexto.value;
    let cicles=parseInt(inputcicles.value);

    for(let i=1;i<=cicles;i++){
        /* create the li element */
        const element=document.createElement("li");
        /* add content to the li */
        element.innerHTML=text;
        /* add the li elemento to the list */
        output.appendChild(element);
        
    };

});

