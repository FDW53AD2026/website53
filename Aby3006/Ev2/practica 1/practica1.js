const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  const inputTurno = document.getElementById("turno");
  const inputHoras = document.getElementById("horas");
  const inputPagoHora = document.getElementById("pagoHora");
  const inputSueldo = document.getElementById("sueldo");

  const turno = inputTurno.value.trim().toLowerCase();
  const horas = Number(inputHoras.value);
  let pagoHora = Number(inputPagoHora.value);

  if (turno === "vespertino") {
    pagoHora = pagoHora + (pagoHora * 0.03);
  } else if (turno === "nocturno") {
    pagoHora = pagoHora + (pagoHora * 1.00);
  } else if (turno === "matutino") {
    pagoHora = pagoHora;
  } else {
    pagoHora = pagoHora;
  }

  const sueldoTotal = horas * pagoHora;

  inputSueldo.value = sueldoTotal;
});