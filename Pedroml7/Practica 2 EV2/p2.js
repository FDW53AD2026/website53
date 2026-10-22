const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const grupoBase = document.getElementById("grupoBase");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const btnMostrar = document.getElementById("btnMostrar");
const divDibujo = document.getElementById("dibujo");

selectFigura.addEventListener("change", e => {
    if (selectFigura.value === "rectangulo") {
        grupoBase.style.display = "block";
    }
    else {
        grupoBase.style.display = "none";
    }
    divDibujo.innerHTML = "";
});

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = selectFigura.value;
    let caracter = inputCaracter.value;
    let base = parseInt(inputBase.value);
    let altura = parseInt(inputAltura.value);
    let resultado = "";

    if (figura === "triangulo") {
        for (let i = 1; i <= altura; i++) {
            for (let j = 1; j <= i; j++) {
                resultado = resultado + caracter;
            }
            resultado = resultado + "<br>";
        }
    }
    else if (figura === "rectangulo") {
        for (let i = 1; i <= altura; i++) {
            for (let j = 1; j <= base; j++) {
                resultado = resultado + caracter;
            }
            resultado = resultado + "<br>";
        }
    }

    divDibujo.innerHTML = resultado;
});