const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputFigura = document.getElementById("Figura");
const inputBase = document.getElementById("base");
const outputResult = document.getElementById("Resultado");
const btnMostrar = document.getElementById("btnMostrar");
const divBase = document.getElementById("divBase");

inputFigura.addEventListener("change", e => {
    if  (inputFigura.value == "triangulo")
        divBase.style.display = "none";
    else 
        divBase.style.display = "block";
    outputResult.textContent = "";
})
/*no duermo*/
btnMostrar.addEventListener("click", e => {
    e.preventDefault();
    console.log("click recibido");



    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let figura = "";

    if(inputFigura.value == "triangulo") {
        for (let i = 1; i <= altura; i++)
            figura +=caracter.repeat(i) + "\n";
    }
    else if (inputFigura.value == "rectangulo") {
        for (let i = 1; i <= altura; i++)
            figura += caracter.repeat(base) + "\n";
    }

    outputResult.textContent = figura;
})