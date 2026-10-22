const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const divBase = document.getElementById("divBase");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const btnMostrar = document.getElementById("btnMostrar");
const outputResultado = document.getElementById("resultado");

selectFigura.addEventListener("change", () => {
    if (selectFigura.value === "Rectangulo") {
        divBase.style.display = "block"; 
    } else {
        divBase.style.display = "none";  
    }
});

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = selectFigura.value;
    let caracter = inputCaracter.value || "*";
    let altura = parseInt(inputAltura.value) || 0;
    let base = parseInt(inputBase.value) || 0;
    let dibujo = "";

    if (figura === "Triangulo") {

        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(i) + "\n";
        }
    } else if (figura === "Rectangulo") {

        for (let i = 0; i < altura; i++) {
            dibujo += caracter.repeat(base) + "\n";
        }
    }

    outputResultado.textContent = dibujo;
});