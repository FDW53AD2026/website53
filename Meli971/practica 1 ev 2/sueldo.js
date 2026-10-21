const formulario = document.getElementById("formularioSueldo");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const turno = document.getElementById("turno").value;
    const horas = parseFloat(document.getElementById("horas").value);
    const pagoHora = parseFloat(document.getElementById("pagoHora").value);

    if (horas <= 0 || pagoHora < 0 ||
        !Number.isFinite(horas) ||
        !Number.isFinite(pagoHora)) {
        resultado.textContent = "Ingresa valores válidos.";
        return;
    }

    let pago = pagoHora;

    if (turno === "vespertino") {
        pago = pagoHora * 1.03;
    } else if (turno === "nocturno") {
        pago = pagoHora * 2;
    }

    const sueldo = horas * pago;

    resultado.textContent =
        "Sueldo total: $" + sueldo.toFixed(2);
});