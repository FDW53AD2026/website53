const inputShape=document.getElementById("shape");
const inputCharacter=document.getElementById("character");
const inputHeight=document.getElementById("height");
const btnShow=document.getElementById("btnshow");
const output=document.getElementById("output");
const btnClear=document.getElementById("btnclear");

function repeatStringNumTimes(str, num) {
return num <= 0 ? str = " " : str + repeatStringNumTimes(str, num - 1);
}
function makeShape(){
    let shape=parseInt(inputShape.value);
    let character=inputCharacter.value;
    let height=inputHeight.value;

    if (shape==1){
        for(let i=1;i<=height;i++){
            const element=document.createElement("p");

            element.innerHTML=repeatStringNumTimes(character,i);
            output.appendChild(element);
        };
    }else if (shape==2){
        for(let i=1;i<=height;i++){
            const element=document.createElement("p");

            element.innerHTML=repeatStringNumTimes(character,height*3);
            output.appendChild(element);
        };
    }else{
        const element=document.createElement("p");

        element.innerHTML="That option does not exist!";

        output.appendChild(element);
    };
}

btnClear.addEventListener("click",e=>{
    e.preventDefault();

    inputCharacter.value="";
    inputHeight.value="";
    output.innerHTML="";
});

inputShape.addEventListener("change",e=>{
    output.innerHTML="";
    makeShape();
});

btnShow.addEventListener("click",e=>{
    e.preventDefault();

    output.innerHTML="";
    makeShape();
});