const turno = document.getElementById("turno");
const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const botonCalcular = document.getElementById("calcular");


const aumentos = {
  matutino: 0,       
  vespertino: 0.03,  
  nocturno: 1        
};

botonCalcular.addEventListener("click", () => {
  const horasTrabajadas = parseFloat(horas.value);
  const pagoPorHora = parseFloat(pago.value);


  if (turno.value === "") {
    alert("Selecciona un turno");
    return;
  }
  if (isNaN(horasTrabajadas) || isNaN(pagoPorHora)) {
    alert("Ingresa las horas trabajadas y el pago por hora");
    return;
  }
  if (horasTrabajadas < 0 || pagoPorHora < 0) {
    alert("Los valores no pueden ser negativos");
    return;
  }

  
  const pagoConAumento = pagoPorHora * (1 + aumentos[turno.value]);
  const sueldoFinal = horasTrabajadas * pagoConAumento;

  sueldo.value = sueldoFinal.toFixed(2);
});