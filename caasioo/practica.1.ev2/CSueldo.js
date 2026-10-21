const turno = document.getElementById("turno");
const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const error = document.getElementById("error");

function calcular() {
  const h = parseFloat(horas.value);
  let p = parseFloat(pago.value);

  if (isNaN(h) || isNaN(p) || h < 0 || p < 0) {
    error.textContent = "Ingresa horas trabajadas y pago por hora válidos (números positivos).";
    sueldo.value = "";
    return;
  }
  error.textContent = "";

  // Vespertino: +3% al pago por hora. Nocturno: +100% al pago por hora.
  if (turno.value === "vespertino") p = p * 1.03;
  else if (turno.value === "nocturno") p = p * 2;

  sueldo.value = "$" + (h * p).toFixed(2);
}

document.getElementById("calcular").addEventListener("click", calcular);
