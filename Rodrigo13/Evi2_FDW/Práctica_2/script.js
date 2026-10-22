const Forma =  document.getElementById("Forma"); 
const Caracter =  document.getElementById("Caracter");
const Altura =  document.getElementById("Altura");
const Etiqueta_Base =  document.getElementById("Etiqueta_Base");
const Base =  document.getElementById("Base");
const Botón_Mostrar = document.getElementById("Botón_Mostrar"); 
const Salida = document.getElementById("Salida");

Forma.addEventListener("change", () => {
  Salida.innerHTML = ""; 

  switch (Forma.value) {

     case "Triángulo": 
           Etiqueta_Base.hidden = true; 
           Base.hidden = true; 
           break; 

     case "Réctangulo": 
          Etiqueta_Base.hidden = false;
          Base.hidden = false; 
          break;
    
    } 
}); 




Botón_Mostrar.addEventListener("click", (e)=> {
  e.preventDefault(); 


  let caract = Caracter.value; 
  let Altur = parseInt(Altura.value); 
  let Bass = parseInt(Base.value); 

  let Forme = ""; 

  switch(Forma.value){

     case "Triángulo": 
    
         for (let i = 1; i <= Altur; i++){
              Forme +=  caract.repeat(i) + "<br>"; 
            }; 
           break; 
      case "Réctangulo": 
          for (let i = 1; i <= Altur; i++){
              Forme += caract.repeat(Bass) + "<br>"; 
            }; 
            break; 
    }

    Salida.innerHTML = ""; 

    let ELEMENTOS = document.createElement("pre"); 
    ELEMENTOS.innerHTML = Forme;

    Salida.appendChild(ELEMENTOS); 

}); 


























 