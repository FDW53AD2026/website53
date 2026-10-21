/* Referencias */
const selectTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPagoHora = document.getElementById("pagoHora");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");


btnLimpiar.addEventListener("click", e => {
    e.preventDefault();
    
    selectTurno.value = "matutino";
    inputHoras.value = "";
    inputPagoHora.value = "";
    outputSueldo.value = "";
    
    inputHoras.focus();
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let horas = parseFloat(inputHoras.value);
    let pagoHora = parseFloat(inputPagoHora.value);
    let turno = selectTurno.value;

    if (isNaN(horas) || isNaN(pagoHora) || horas < 0 || pagoHora < 0) {
        outputSueldo.value = "Datos inválidos";
        return; 
    }

    let pagoHoraAjustado = pagoHora;

    if (turno === "vespertino") {
        pagoHoraAjustado = pagoHora + (pagoHora * 0.03); 
    } else if (turno === "nocturno") {
        pagoHoraAjustado = pagoHora + (pagoHora * 1.00); 
    }

    let sueldoTotal = horas * pagoHoraAjustado;

    outputSueldo.value = "$ " + sueldoTotal.toFixed(2);
});