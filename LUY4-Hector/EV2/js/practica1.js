// PRACTICA 1

const inputTurno = document.getElementById("turn");
const inputHoras = document.getElementById("hour");
const inputPagoXHora = document.getElementById("pay");
const inputSueldo = document.getElementById("salary");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener ("click", e =>  {
    e.preventDefault();
    let turn = parseFloat(inputTurno.value);
    let hour = parseFloat(inputHoras.value);
});