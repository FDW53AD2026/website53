const Paybase=5;
const shifts=["matutino","vespertino","nocturno"];
const Shift=document.getElementById("shift");
const Hours=document.getElementById("hours");
const Pay=document.getElementById("pay");
const Salary=document.getElementById("salary");
const Calculate=document.getElementById("btncal");
const Clear=document.getElementById("btnclear");

Clear.addEventListener("click",e =>{
    e.preventDefault();

    Shift.value="";
    Hours.value="";
    Pay.value="";
    Salary.value="";
});

Shift.addEventListener("input",e => {
    let shift=Shift.value;
    if(shift.toLowerCase()=="matutino"){
        Pay.value=Paybase;
    }else if (shift.toLowerCase()=="vespertino"){
        Pay.value=Paybase+(Paybase*.03);
    }else if (shift.toLowerCase()=="nocturno"){
        Pay.value=Paybase+(Paybase*1);
    }else{
        Pay.value=0;
    }
});

Calculate.addEventListener("click",e =>{
    e.preventDefault();

    let pay=Pay.value;
    let shift=Shift.value;
    let hour=Hours.value;

    if(pay!=""&hour!=""){
        Salary.value=parseFloat(pay)*parseFloat(hour);
    }else{
        Salary.value="Some data was missing!";
    }

});

