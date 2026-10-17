const inputTurno = document.getElementById("Turno");
const inputHoras = document.getElementById("Horas");
const inputPagoHora = document.getElementById("PagoHoras");
const inputSueldo = document.getElementById("Sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener("click", () => {
  const turno = inputTurno.value.trim().toLowerCase();
  const horas = parseFloat(inputHoras.value);
  const pagoHora = parseFloat(inputPagoHora.value);

  if (isNaN(horas) || isNaN(pagoHora)) {
    alert("Ingresa horas y pago por hora válidos");
    return;
  }

  let sueldo = horas * pagoHora;

  if (turno === "vespertino") {
    sueldo = sueldo * 1.03;
  } else if (turno === "nocturno") {
    sueldo = sueldo * 2;
  }

  inputSueldo.value = sueldo.toFixed(2);
});

btnLimpiar.addEventListener("click", () => {
  inputTurno.value = "";
  inputHoras.value = "";
  inputPagoHora.value = "";
  inputSueldo.value = "";
});