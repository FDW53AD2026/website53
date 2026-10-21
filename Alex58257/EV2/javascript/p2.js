const inputfigura = document.getElementById("figura");
const inputcaracter = document.getElementById("caracter");
const inputarea = document.getElementById("altura");
const divresultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");

function calculo() {
    let tipofigura = parseInt(inputfigura.value);
    let caracter = inputcaracter.value || '*';
    let altura = parseInt(inputarea.value);
    let dibujo = "";


if (isNaN(altura) || altura <=0) {
    divresultado.textContent = "Por favor, ingrese una altura válida mayor a 0";
    return;
}

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
}

btnMostrar.addEventListener("click" , e=> {
    e.preventDefault();
    calculo();
});