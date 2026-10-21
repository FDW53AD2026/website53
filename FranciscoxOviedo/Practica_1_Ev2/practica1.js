const horario = document.getElementById("horario");
const btnObtener = document.getElementById("btnObtener");
btnObtener.addEventListener("click", function() {
    let tiempo = Number(document.getElementById("tiempo").value);
    let tarifa = Number(document.getElementById("tarifa").value);
    let sueldo = 0;
    if (tiempo <= 0 || tarifa <= 0) {
        document.getElementById("resultado").value = "Datos inválidos";
        return;
    }
    if (horario.value == "vespertino") {
        tarifa = tarifa + (tarifa * 0.03);
    }
    else if (horario.value == "nocturno") {
        tarifa = tarifa + (tarifa * 1.00);
    }
    sueldo = tiempo * tarifa;
    document.getElementById("resultado").value = sueldo.toFixed(2);
});
