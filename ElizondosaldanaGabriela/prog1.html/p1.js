function calcular() {
  const turno = document.getElementById("turno").value;
  const horas = parseFloat(document.getElementById("horas").value);
  let pago = parseFloat(document.getElementById("pago").value);
 
  if (isNaN(horas) || isNaN(pago) || horas < 0 || pago < 0) {
    alert("Ingresa horas y pago válidos.");
    return;
  }
 
  if (turno === "vespertino") {
    pago = pago * 1.03;   // +3%
  } else if (turno === "nocturno") {
    pago = pago * 2;      // +100%
  }                       // matutino: pago normal
 
  const sueldo = horas * pago;
  document.getElementById("sueldo").value = "Sueldo: " + sueldo.toFixed(2) + " $";
}
 
function limpiar() {
  document.getElementById("turno").value = "matutino";
  document.getElementById("horas").value = "";
  document.getElementById("pago").value = 5;
  document.getElementById("sueldo").value = "";
}