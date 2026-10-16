
const inputTurno = document.getElementById("Turno");
const inputHoras = document.getElementById("Horas");
const inputPago = document.getElementById("Pago");
const outputSueldo = document.getElementById("Sueldo");
const btnCalcular = document.getElementById("btncalcular");
const btnLimpiar = document.getElementById("btnlimpiar");

btnCalcular.addEventListener('click', e =>{
    let Turno = inputTurno.value;
    let Horas = parseFloat(inputHoras.value);
    let Pago = parseFloat(inputPago.value);

    if(Turno== 'Matutino'){
        outputSueldo.value=Horas*Pago;
    }
    else if (Turno=='Vespertino'){
        outputSueldo.value=Horas*(Pago*1.03);
    }
    else if (Turno=='Nocturno'){
        outputSueldo.value=Horas*(Pago*2);
    }
    else{
        alert('escribe Matutino,Vespertino o Nocturno')
    }

})

btnLimpiar.addEventListener('click', e => {
    Turno.value = '';
    Horas.value = '';
    Pago.value = '';
    Sueldo.value = '';
});



