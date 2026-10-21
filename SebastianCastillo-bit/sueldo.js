
function calcularSueldo() {
    let turno = document.getElementById("turno").value;
    let horasTexto = document.getElementById("horas").value;
    let pagoTexto = document.getElementById("pago").value;

    let horas = Number(horasTexto);
    let pago = Number(pagoTexto);

    if (horasTexto.trim() === "" ||
        pagoTexto.trim() === "" ||
        !Number.isFinite(horas) ||
        !Number.isFinite(pago) ||
        horas <= 0 || pago <= 0) {
        alert("Ingresa horas y pago validos");
        document.getElementById("sueldo").value = "";
        return;
    }

    if (turno === "vespertino") {
        pago = pago * 1.03;
    } else if (turno === "nocturno") {
        pago = pago * 2;
    }

    let sueldo = horas * pago;

    document.getElementById("sueldo").value =
        sueldo.toFixed(2);
}

function limpiar() {
    document.getElementById("turno").value = "diurno";
    document.getElementById("horas").value = "";
    document.getElementById("pago").value = "";
    document.getElementById("sueldo").value = "";
}
