const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPagoHora = document.getElementById("pagoHora");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputTurno.value = "";
    inputHoras.value = "";
    inputPagoHora.value = "";
    outputSueldo.value = "";
    
    inputTurno.focus();
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let turno = inputTurno.value.trim().toLowerCase();
    let horas = parseFloat(inputHoras.value);
    let pagoHora = parseFloat(inputPagoHora.value);
    let pagoFinalPorHora = 0;

    if (isNaN(horas) || isNaN(pagoHora)) {
        outputSueldo.value = "Datos invalidos.";
        return;
    }

    if (turno === "vespertino") {
        pagoFinalPorHora = pagoHora + (pagoHora * 0.03);
    } else if (turno === "nocturno") {
        pagoFinalPorHora = pagoHora + (pagoHora * 1.00);
    } else {
        outputSueldo.value = "Turno invalido.";
        return;
    }

    let sueldoTotal = horas * pagoFinalPorHora;
    outputSueldo.value = sueldoTotal.toFixed(2);
});