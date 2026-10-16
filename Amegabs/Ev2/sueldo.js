const inputturno = document.getElementById("turno");
const inputhoras = document.getElementById("horas");
const inputpago = document.getElementById("pago");
const outputsueldo = document.getElementById("sueldo");
const btncalcular = document.getElementById("calcular");
const btnlimpiar = document.getElementById("limpiar");

btncalcular.addEventListener("click", e => {
    e.preventDefault()

    let horas = parseInt(inputhoras.value);
    let pago = parseInt(inputpago.value)
    let sueldo = pago;

    if (inputturno.value == "vespertino"){
        sueldo = pago + pago * 0.03;
    }

    if (inputturno.value == "nocturno"){
        sueldo = pago + pago * 1.0;
    }

    outputsueldo.value = horas * sueldo;

});

btnlimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputturno.value = "";
    inputhoras.value = "";
    inputpago.value = "";
    outputsueldo.value = "";
})
