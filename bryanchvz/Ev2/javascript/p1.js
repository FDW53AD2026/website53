const turno = document.getElementById("turno");
const horas = document.getElementById("horas");
const pagohora = document.getElementById("pagohora");
const sueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    turno.value = "";
    horas.value = "";
    pagohora.value = "";
    sueldo.value = "";
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let valorTurno = turno.value.toLowerCase();
    let numHoras = parseFloat((horas.value));
    let pagoxHora = parseFloat((pagohora.value));
    let resultado = 0;
    

    if (valorTurno ===  "matutino"){
        resultado = (numHoras * pagoxHora);
    }
    else if (valorTurno === "vespertino"){
        let pagoVespertino = pagoxHora + (pagoxHora * 0.03);
        resultado = numHoras * pagoVespertino;
    }
    else if (valorTurno === "nocturno"){
        let pagoNocturno = pagoxHora + (pagoxHora * 1);
        resultado = numHoras * pagoNocturno;
    }
    sueldo.value = resultado;
});