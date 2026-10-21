const figura = document.getElementById("forma");
const caracter = document.getElementById("caracter");
const altura = document.getElementById("altura");
const base_label = document.getElementById("label_base")
const base = document.getElementById("base")
const btnMostrar = document.getElementById("mostrar")
const salida = document.getElementById("salida")

figura.addEventListener("change", e => {

    salida.innerHTML = "";
    switch(figura.value){
    case "Tri":
            base_label.style.display = "none";
            base.style.display = "none";
            break;
        case "Rec":
            base_label.style.display = "inline";
            base.style.display = "inline";
            break;
    };

});

btnMostrar.addEventListener("click", e =>{
    e.preventDefault();

    salida.innerHTML = "";

    let crt = caracter.value ;
    let alt = parseInt(altura.value) ;
    let bas = parseInt(base.value) ;

    let fig = ""

    switch(figura.value){
        case "Tri":
            for(let a = 1; a<=alt; a++){
                fig += crt.repeat(a) + "<br>";

            };
            break;
        case "Rec":
             for(let a = 1; a<=alt; a++){
                fig += crt.repeat(bas) + "<br>";
             };
            break;
    };
    let elemento = document.createElement("pre");
    elemento.innerHTML = fig;
    salida.appendChild(elemento);



});