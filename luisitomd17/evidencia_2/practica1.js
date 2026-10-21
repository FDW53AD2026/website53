const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPago = document.getElementById("pago");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btncalcular");
const btnLimpiar = document.getElementById("btnlimpiar");

btnLimpiar.addEventListener("click", e=>{
    e.preventDefault();

    inputTurno.value = "";
    inputHoras.value = "";
    inputPago.value = "";
    outputSueldo.value = "";
});

btnCalcular.addEventListener("click", e=>{
    e.preventDefault();

    let Turno = inputTurno.value;
    let Horas = parseFloat(inputHoras.value);
    let Pago = parseFloat(inputPago.value);
    let Sueldo =0;

    if(Turno === "Matutino"){
        outputSueldo.value = Horas * Pago;
    }
    else if(Turno === "Vespertino"){
        outputSueldo.value = Horas * (Pago * 1.03);
    }
    else if(Turno === "Nocturno"){
        outputSueldo.value = Horas * (Pago * 2);
    }
    else{
        outputSueldo.value = "Turno no válido";
    }

});