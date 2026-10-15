const inputturno = document.getElementById("turno")
const inputhoras = document.getElementById("horas")
const inputpago = document.getElementById("pago")
const outputsueldo = document.getElementById("sueldo")

const btncal = document.getElementById("calcular")
const btnlim = document.getElementById("limpiar")

btncal.addEventListener("click", e => {
    e.preventDefault();
    let calcula = inputturno.value;
    let h = inputhoras.value;
    let p = inputpago.value;
    if(calcula == "m"){
        let su = h * p ;
        outputsueldo.value = su;
    }
    else if(calcula== "v"){
        su = h * (p* 1.3);
        outputsueldo.value = su;
    }
    else if(calcula== "n"){
        su = h * (p* 2);
        outputsueldo.value = su;
    }
    else
        inputturno.value= "Error, ponga un turno correcto";

});


btnlim.addEventListener("click", e => {
    e.preventDefault();
    inputturno.value =" ";
    inputhoras.value =" ";
    inputpago.value =" ";
    outputsueldo.value =" ";
    inputturno.focus();

});