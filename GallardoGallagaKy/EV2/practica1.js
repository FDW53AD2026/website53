const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPago = document.getElementById("pago");
const inputResultado = document.getElementById("salario");

const botonCalcular = document.getElementById("btnCalcular");
const botonBorrar = document.getElementById("btnLimpiar");

botonBorrar.addEventListener("click", function(e) {
    e.preventDefault();

    inputTurno.value = "";
    inputHoras.value = "";
    inputPago.value = "";
    inputResultado.value = "";
});

botonCalcular.addEventListener("click", function(e) {
    e.preventDefault();

    let nombreTurno = inputTurno.value.toLowerCase();
    let cantidadHoras = parseFloat(inputHoras.value);
    let tarifa = parseFloat(inputPago.value);
    let sueldoFinal = 0;

    if (nombreTurno === "matutino") {
        sueldoFinal = cantidadHoras * tarifa;
    }
    else if (nombreTurno === "vespertino") {
        sueldoFinal = (cantidadHoras * tarifa) + (cantidadHoras * tarifa * 3 / 100);
    }
    else if (nombreTurno === "nocturno") {
        sueldoFinal = (cantidadHoras * tarifa) + (cantidadHoras * tarifa * 100 / 100);
    }

    inputResultado.value = sueldoFinal.toFixed(2);
});
