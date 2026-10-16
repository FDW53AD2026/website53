const InputTurnos = document.getElementById("TURNOS"); 
const InputHoras = document.getElementById("HORAS");
const InputPayForHour = document.getElementById("PAYFHOUR"); 
const Sueldos = document.getElementById("SUELDO"); 
const BtnCalculando = document.getElementById("CALCULANDO");
const BtnLimpiando =document.getElementById("LIMPIADO");

BtnCalculando.addEventListener("click", e =>{
 
  e.preventDefault(); 

  let seleccionando_Turnos =  InputTurnos.value; 

  console.log("Botono funcionando"); 

  let Incremento = seleccionando_Turnos == "Vespertino/Tarde" ? 0.03 
                    :seleccionando_Turnos == "Nocturno/Noche"? 1
                    :0;
  let InputPayForHour_Ended = parseFloat(InputPayForHour.value) + (InputPayForHour.value * Incremento);
   Sueldos.value = InputHoras.value * InputPayForHour_Ended;               
}); 

BtnLimpiando.addEventListener("Click", e=>{
    e.preventDefault(); 
     
     InputTurnos.value = ""
     InputHoras.value = ""
     InputPayForHour.value = ""
     Sueldos.Sueldos= ""


}); 