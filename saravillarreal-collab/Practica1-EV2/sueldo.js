/* Codigo para calcular el sueldo por horas trabajadas */

const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPago = document.getElementById("pago");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    
    let t = inputTurno.value.toLowerCase();
    let h = parseFloat(inputHoras.value);
    let p = parseFloat(inputPago.value);
    
    if (t == "matutino")
        p = p;
    else if (t == "vespertino")
        p = p * 1.03;
    else if (t == "nocturno")
        p = p * 2;
    else {
        alert("Turno no valido");
        return;
    }

    let s = h * p;

    outputSueldo.value = s.toFixed(2);
});

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputTurno.value = "";
    inputHoras.value = "";
    inputPago.value = "";
    outputSueldo.value = "";

    inputTurno.focus();
});
