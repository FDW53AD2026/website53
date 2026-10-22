const inputFigura = document.getElementById("Figura");
const inputCaracter = document.getElementById("Caracter");
const inputArea = document.getElementById("Cltura");
const divResultado = document.getElementById("Resultado");
const btnMostrar = document.getElementById("btnmostrar");

function calculo() {
    let tipofigura = parseInt(inputFigura.value);
    let caracter =inputCaracter.value || '*';
    let altura =parseInt(inputArea.value);
    let dibujo = "";

if (tipofigura ===1) {
    for (let i=1; i<=altura; i++) {
        dibujo += caracter.repeat(i) + '\n';
    }
} else if (tipofigura ===2) {
    let ancho = altura * 2;
    for (let i = 0; i < altura; i++) {
        dibujo +=caracter.repeat(ancho) + '\n';
    }
}
divresultado.textContent = dibujo;
btnMostrar.addEventListener("click", e=> {
    e.preventDefault();
    calculo();
})