
const turnoTrabajador = document.getElementById("turno");
const horasTrabajadas = document.getElementById("horas");
const pagoHora = document.getElementById("pago");
const sueldoFinal = document.getElementById("sueldo");
const botonCalcular = document.getElementById("calcular");
const botonLimpiar = document.getElementById("limpiar");

botonCalcular.addEventListener("click", function(evento) {
    evento.preventDefault();

    let turno = turnoTrabajador.value.toLowerCase().trim();
    let horas = parseFloat(horasTrabajadas.value);
    let pago = parseFloat(pagoHora.value);

    if (horasTrabajadas.value.trim() === "" ||
        pagoHora.value.trim() === "" ||
        !Number.isFinite(horas) ||
        !Number.isFinite(pago) ||
        horas < 0 || pago < 0) {
        alert("Ingresa horas y pago por hora válidos.");
        return;
    }

    if (turno === "matutino") {
        pago = pago;
    } else if (turno === "vespertino") {
        pago = pago * 1.03;
    } else if (turno === "nocturno") {
        pago = pago * 2;
    } else {
        alert("El turno ingresado no es válido.");
        return;
    }

    let totalSueldo = horas * pago;

    sueldoFinal.value = totalSueldo.toFixed(2);
});

botonLimpiar.addEventListener("click", function(evento) {
    evento.preventDefault();

    turnoTrabajador.value = "";
    horasTrabajadas.value = "";
    pagoHora.value = "70";
    sueldoFinal.value = "";

    turnoTrabajador.focus();
});
