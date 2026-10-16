// PRACTICA 1

const inputTurno = document.getElementById("turn");
const inputHoras = document.getElementById("hour");
const inputPagoXHora = document.getElementById("pay");
const inputSueldo = document.getElementById("salary");

const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnCalcular.addEventListener ("click", e =>  {
    e.preventDefault();
    const turno = inputTurno.value.toLowerCase(); //toLowerCase: Para convertir el texto en minusculas
    const horas = parseFloat(inputHoras.value);
    let pagoPorhoraBase = parseFloat(inputPagoXHora.value);

    let pagoPorhorafinal = pagoPorhoraBase;

    if (turno == "matutino") {
        pagoPorhorafinal = pagoPorhoraBase; //Deja el Pago por Hora por default
    }
    else if (turno == "vespertino") {
        pagoPorhorafinal = pagoPorhoraBase * 1.03; // Se aumenta el 3%
    } else if (turno == "nocturno") {
        pagoPorhorafinal = pagoPorhoraBase * 2; // Se aumenta un 100%
    }
    
    inputPagoXHora.value = pagoPorhorafinal; //to
    
    const sueldoTotal = horas * pagoPorhorafinal;

    inputSueldo.value = sueldoTotal; 
});

btnLimpiar.addEventListener ("click", e => {
    e.preventDefault();
    inputTurno.value = "";
    inputHoras.value = "";
    inputPagoXHora.value = "70";
    inputSueldo.value = "";

    inputTurno.focus();
});