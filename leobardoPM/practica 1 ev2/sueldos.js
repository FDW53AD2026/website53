/*arriba xbox, play es un pendejo*/
const SelectTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const imputPagohora = document.getElementById("pagohora");
const  imputSueldo= document.getElementById("sueldo");
const  imputCalcular= document.getElementById("imputcalcular");
const  btnLimpiar= document.getElementById("btnlimpiar");

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();
        
    selectTurno.value = "matutino";
    inputHoras.value = "";
    inputPagoHora.value = "";
    outputSueldo.value = "";
    
    inputHoras.focus();
});
btnCalcular.addEventListener("click", e => {
    e.preventDefault();
     let horas = parseFloat(inputHoras.value);
    let pagoHora = parseFloat(inputPagoHora.value);
    let turno = selectTurno.value;

    let pagoHoraAjustado = pagoHora;

    if (turno === "vespertino") {
        pagoHoraAjustado = pagoHora + (pagoHora * 1.03); 
    } else if (turno === "nocturno") {
        pagoHoraAjustado = pagoHora + (pagoHora * 1.00); 
    }

    let sueldoTotal = horas * pagoHoraAjustado;

    outputSueldo.value = "$ " + sueldoTotal.toFixed(2);
});