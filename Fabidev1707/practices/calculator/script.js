/* References */
const inputNum1=document.getElementById("first");
const inputNum2=document.getElementById("second");
const inputOpe=document.getElementById("ope");
const output=document.getElementById("output");
const btncalculate=document.getElementById("btncal");
const btnclear=document.getElementById("btnclear");

/* create a function */
function calculate(){
    let num1=parseInt(inputNum1.value);
    let num2=parseInt(inputNum2.value);
    let opesel=parseInt(inputOpe.value);
    let resul=0;

    if(opesel==1)
        resul=num1+num2;
    else if (opesel==2)
        resul=num1-num2;
    else if (opesel==3)
        resul=num1*num2;
    else if (opesel==4)
        resul=num1/num2;
    else
        resul="that option does not exist!";

    output.value=resul;
}

btnclear.addEventListener("click",e =>{
    e.preventDefault();

    inputNum1.value="";
    inputNum2.value="";
    inputOpe.value="";
    output.value="";
});

inputOpe.addEventListener("change",e=>{
    calculate();
});

btncalculate.addEventListener("click", e=>{
    e.preventDefault();

    calculate();
});