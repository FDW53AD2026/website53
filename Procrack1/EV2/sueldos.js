const inputTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputPago= document.getElementById("pagos");
const outputSueldo= document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click",e=> {
    e.preventDefault();
    inputTurno.value = "";
    inputHoras.value = "";
    inputPago.value = "";
    outputSueldo.value = "";
    
    inputTurno.focus();
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    const turno = inputTurno.value.trim().toLowerCase();
    const horas = parseInt(inputHoras.value);
    let pagos = parseInt(inputPago.value);

    if (turno === "vespertino") {
        pagos *= 0.03;
    } else if (turno === "nocturno") {
        pagos *= 2;
    }

    let sueldo = horas * pagos;
    outputSueldo.value = sueldo;
});