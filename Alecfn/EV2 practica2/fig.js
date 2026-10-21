const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const cajaBase = document.getElementById("cajabase");
const btnMostrar = document.getElementById("btnMostrar");
const outputResultado = document.getElementById("resultado");

function mostrarCampos() {
    let figura = inputFigura.value;
    if (figura == 1) {
        cajaBase.hidden = true;
    }
    else if (figura == 2) {
        cajaBase.hidden = false;
    }
}
function dibujar() {
    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let dibujo = "";
    if (caracter == "") {
        alert("Escribir un caracter");
    }
    else if (isNaN(altura)) {
        alert("La altura debe ser un numero")
    }
    else if (figura == 1) {
        for (let i =1; i <= altura; i++) {
            dibujo = dibujo + caracter.repeat(i) + "\n";
        }
        outputResultado.textContent = dibujo;
    }
    else if (figura == 2) {
        if (isNaN(base)) {
            alert("La base debe ser un numero");
        }
        else {
            for (let i =1; i <= altura; i++) {
                dibujo = dibujo + caracter.repeat(base) + "\n";
            }
            outputResultado.textContent = dibujo;
        }
    }
}
inputFigura.addEventListener("change" , mostrarCampos);
btnMostrar.addEventListener("click" , dibujar);

