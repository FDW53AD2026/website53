const Turno = document.getElementById("Turnos");
const Horas = document.getElementById("txtHoras");
const Pago = document.getElementById("txtPHora");
const Sueldo = document.getElementById("Sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    let Turnos = Turno.value.toLowerCase();
    let HorasTrabajadas = parseFloat(Horas.value);
    let PagoHora = parseFloat(Pago.value);

    if (Turnos == "matutino")
        PagoHora = PagoHora * 1;
    else if (Turnos == "vespertino") {
        PagoHora = PagoHora * 1.03;
    } else if (Turnos == "nocturno") {
        PagoHora = PagoHora * 2;
    }
    else {
        alert("Turno NO VALIDO.");
        return
    }

    let Total = HorasTrabajadas * PagoHora
    Sueldo.value = Total.toFixed(2);
})

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    Turno.value = "";
    Horas.value = "";
    Pago.value = "";
    Sueldo.value = "";

    Turno.focus();
});