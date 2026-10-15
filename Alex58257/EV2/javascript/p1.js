const inputturno = document.getElementById("turno");
const inputhoras = document.getElementById("horas");
const inputpago = document.getElementById("pago");
const outputsueldo = document.getElementById("sueldo");
const btncalcular = document.getElementById("btncalcular");
const btnlimpiar = document.getElementById("btnlimpiar");

btnlimpiar.addEventListener("click", e=>{
    e.preventDefault();
    inputturno.value="";
    inputhoras.value="";
    inputpago.value="";
    outputsueldo.value="";
}
)

btncalcular.addEventListener("click", e=> {
    e.preventDefault();

    let turno = inputturno.value.toLowerCase();
    let horas = parseFloat((inputhoras.value));
    let pago = parseFloat((inputpago.value));
    let resultado = 0;

    if (turno === "matutino"){
        resultado = (horas * pago);
    }
    else if (turno === "vespertino"){
        let pagovespertino = pago + (pago * 0.03);
        resultado =  horas * pagovespertino;
    }

    else if (turno === "nocturno"){
        let pagonocturno = pago + (pago * 1);
        resultado = horas * pagonocturno;
    }
    outputsueldo.value = resultado.toFixed(2);
})
