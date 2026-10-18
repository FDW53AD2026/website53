/*dinero*/
const selectTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPagoHora = document.getElementById("PxH");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("calcular");
const btnLimpiar = document.getElementById("limpiar");

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    selectTurno.value = "Matutino";
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
    

    let pagoHoraAjustado = pagoHora;

    if (turno === "Vespertino") {
        pagoHoraAjustado = pagoHora * 1.03;
    } else if (turno === "Nocturno") {
        pagoHoraAjustado = pagoHora * 2;
    }

    let sueldoTotal = horas * pagoHoraAjustado;

    outputSueldo.value = "$ " + sueldoTotal.toFixed(2);
});