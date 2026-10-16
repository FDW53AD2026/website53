
const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPagoHora = document.getElementById("pagoHora");
const inputSueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let turno = inputTurno.value;
    let horas = parseFloat(inputHoras.value);
    let pagoHora = parseFloat(inputPagoHora.value);

    let sueldo = horas * pagoHora;

    if (turno == "vespertino") {
        sueldo = sueldo * 1.03;
    }

    if (turno == "nocturno") {
        sueldo = sueldo * 2;
    }

    inputSueldo.value = sueldo;
});

btnLimpiar.addEventListener("click", e => {
    inputTurno.value = "";
    inputHoras.value = "";
    inputPagoHora.value = "";
    inputSueldo.value = "";


});
