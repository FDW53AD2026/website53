const InputTurnos = document.getElementById("TURNOS");
const InputHoras = document.getElementById("HORAS");
const InputPayForHour = document.getElementById("PAYFHOUR");
const Sueldos = document.getElementById("SUELDO");

const BtnCalculando = document.getElementById("CALCULANDO");
const BtnLimpiando = document.getElementById("LIMPIADO");

BtnCalculando.addEventListener("click", (e) => {

    e.preventDefault();

    let turno = InputTurnos.value;
    let horas = parseFloat(InputHoras.value);
    let pagoHora = parseFloat(InputPayForHour.value);

    let incremento = 0;

    if (turno === "Vespertino/Tarde") {
        incremento = 0.03;
    } 
    
    else if (turno === "Nocturno/Noche") {
        incremento = 1;
    }

    let pagoFinal = pagoHora + (pagoHora * incremento);

    let sueldo = horas * pagoFinal;

    Sueldos.value = sueldo;
});

BtnLimpiando.addEventListener("click", (e) => {

    e.preventDefault();

    InputTurnos.value = "";
    InputHoras.value = "";
    InputPayForHour.value = "";
    Sueldos.value = "";
});