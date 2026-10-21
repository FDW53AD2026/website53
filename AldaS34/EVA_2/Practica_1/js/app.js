const turno = document.getElementById("turno");
const horas = document.getElementById("horas");
const PxH = document.getElementById("PxH");
const sueldo = document.getElementById("sueldo");
const btnCalc = document.getElementById("calcular")
const btnLimpiar = document.getElementById("limpiar")

btnCalc.addEventListener("click", e =>{

    e.preventDefault();

    let turno_seleccionado = turno.value ;
    
    let aumento =   turno_seleccionado == "Vespertino" ? 0.03
                    : turno_seleccionado == "Nocturno" ? 1
                    : 0;

    let PxH_final = parseFloat(PxH.value) +(PxH.value * aumento);

    sueldo.value = horas.value * PxH_final;

});

btnLimpiar.addEventListener("click", e=>{
    e.preventDefault();

     turno.value = "Matutino"
     horas.value = ""
     PxH.value = ""
     sueldo.value = ""

});