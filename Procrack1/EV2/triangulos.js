const inputFigura= document.getElementById ("figura");
const inputCaracter= document.getElementById ("caracter");
const inputAltura= document.getElementById ("altura");
const inputBase= document.getElementById ("base");
const btnMostrar= document.getElementById ("btnMostrar");
const salida = document.getElementById ("salida");

inputFigura.addEventListener("change",e=>{
    e.preventDefault();
    inputBase.disabled=inputFigura.value == 2;
});

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let resultado = "";

    salida.innerHTML ="";

   if (inputFigura.value == 2) {
        for (let i = 1; i <= altura; i++) {
            resultado += caracter.repeat(i) + "\n";
        }
    } else {
        for (let i = 0; i < altura; i++) {
            resultado += caracter.repeat(base) + "\n";
        }
    }
    salida.textContent = resultado;
});