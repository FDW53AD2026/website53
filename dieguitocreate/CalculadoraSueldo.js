//Codigo para calcular un sueldo en base a las horas trabajadas y el pago 
// por hora

const inputTurno = document.getElementById('turno');
const inputHoras = document.getElementById('horas');
const inputPagoHora = document.getElementById('pagoHora');
const outputSueldo = document.getElementById('sueldo');
const btnLimpiar = document.querySelector('.btnLimpiar');
const btnCalcular = document.querySelector('.btnCalcular');


btnLimpiar.addEventListener("click", e => {
    e.preventDefault();
    inputTurno.value = "";
    inputHoras.value = "";
    inputPagoHora.value = "";
    outputSueldo.value = "";

    inputHoras.focus();
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    const turno = inputTurno.value.trim().toLowerCase();
    const horas = parseFloat(inputHoras.value);
    let pagoHora = parseFloat(inputPagoHora.value);

    if (turno === "vespertino") {
        pagoHora *= 1.03;
    } else if (turno === "nocturno") {
        pagoHora *= 2;
    }

    const sueldo = horas * pagoHora;
    outputSueldo.value = sueldo;
});