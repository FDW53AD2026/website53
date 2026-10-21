function calcularSueldo() {
    const turno = document.getElementById("turno").value.trim().toLowerCase();
    const horas = parseFloat(document.getElementById("horas").value);
    const pago = parseFloat(document.getElementById("pago").value);

    if (isNaN(horas) || isNaN(pago) || horas < 0 || pago < 0) {
        alert("Ingresa horas trabajadas y pago por hora válidos.");
        return;
    }

    let pagoFinal = pago;

    if (turno === "vespertino") {
        pagoFinal = pago * 1.03;   // aumenta 3%
    } else if (turno === "nocturno") {
        pagoFinal = pago * 2;      // aumenta 100%
    } else if (turno !== "matutino") {
        alert("Turno no válido. Escribe: matutino, vespertino o nocturno.");
        return;
    }

    const sueldo = horas * pagoFinal;
    document.getElementById("sueldo").value = sueldo.toFixed(2);
}

function borrarCampos() {
    document.getElementById("turno").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("pago").value = "";
    document.getElementById("sueldo").value = "";
    document.getElementById("turno").focus();
}

document.getElementById("btnTotal").addEventListener("click", calcularSueldo);
document.getElementById("btnBorrar").addEventListener("click", borrarCampos);