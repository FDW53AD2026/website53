const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const contenedorBase = document.getElementById("contenedorBase");
const resultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");

function ocultar(){
    if(inputFigura.value == "1"){
        contenedorBase.classList.add("oculto");
    }
    else{
        contenedorBase.classList.remove("oculto");
    }
}

inputFigura.addEventListener("change", ocultar);

btnMostrar.addEventListener("click", e => {
    e.preventDefault();
    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let dibujo = ""

    if(isNaN(altura) || altura <= 0){
        resultado.textContent = "Ingresa una altura mayor a 0";
        return;
    }


    if(figura == "1"){
        for(let i= 1; i <= altura; i++){
            dibujo+= caracter.repeat(i) + "\n";
        }
    } else if(figura == "2"){
        if(isNaN(base) || base <= 0) {
            resultado.textContent = "Ingresa una base mayor a 0";
            return;
        }
        for (let i = 0; i < altura; i++){
            dibujo += caracter.repeat(base) + "\n";
        }
    }

    resultado.textContent = dibujo;
});

ocultar();