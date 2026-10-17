//Se me borraron los commits por un error de un archivo fantasma//
const turno = document.getElementById ("turno");
const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnlimpiar = document.getElementById("btnlimpiar");

btnlimpiar.addEventListener("click" , e =>{
    e.preventDefault();

    turno.value = "";
    horas.value = "";
    pago.value = "";
    sueldo.value = "";
});

btnCalcular.addEventListener("click" , e => {
    e.preventDefault();

    let valorTurno = turno.value.toLowerCase();
    let numhoras = parseFloat((horas.value));
    let pagophora = parseFloat((pago.value));
    let resultado = 0;

    if (valorTurno === "matutino"){
        resultado = (numhoras * pagophora);
    }
    else if (valorTurno === "vespertino"){
        let pagovespertino = pagophora + (pagophora * 0.03);
        resultado = numhoras * pagovespertino;
    }
    else if(valorTurno === "nocturno"){
        let pagonocturno = pagophora + (pagophora * 1);
        resultado = numhoras * pagonocturno;
    }
    sueldo.value = resultado;
});