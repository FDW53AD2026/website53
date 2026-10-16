const AUMENTO_VESPERTINO = 0.03;
const AUMENTO_NOCTURNO = 1.00;

const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPago = document.getElementById("pago");
const outputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let turno = inputTurno.value.toLowerCase();
    let horas = parseFloat(inputHoras.value);
    let pago = parseFloat(inputPago.value);

    if (turno === "matutino") {
        outputSueldo.value = horas * pago;
    }
    else if (turno === "vespertino") {
        let pagoVespertino = pago + pago * AUMENTO_VESPERTINO;
        outputSueldo.value = horas * pagoVespertino;
    }
    else if (turno === "nocturno") {
        let pagoNocturno = pago + pago * AUMENTO_NOCTURNO;
        outputSueldo.value = horas * pagoNocturno;
    }
    else {
        outputSueldo.value = "Turno no válido";
    }
});

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputTurno.value = "";
    inputHoras.value = "";
    inputPago.value = "";
    outputSueldo.value = "";
});