// PRACTICA 2

const inputFigur = document.getElementById("figure")
const inputCaracter = document.getElementById("car")
const inputAltura = document.getElementById("alt")

const btnMostrar = document.getElementById("btnMostrar")
const contenedorResult = document.getElementById("result")

btnMostrar.addEventListener ("click", e => {
    e.preventDefault();
    const figura = inputFigur.value;
    const caracter = inputCaracter.value || "*" ; // Se elige el caracter que vaya a colocar el usuario: * por defecto
    const altura = parseInt(inputAltura.value);

    let result = "";

    if(figura == "triangulo") {
        for (let i = 1 ; i <= altura ; i++) /* Empieza con i = 1, luego se suma 1 a i hasta que llegue a el numero escrito por el usuario en "altura"  */ 
            {result += caracter.repeat(i) + "\n"; } /* Se modifica "result" usando +=, 
            "caracter.repeat(i)" genera el numero de caracteres en base al numero del renglon en el que se esta, "\n" se agrega al final de cada renglon */
    } 
    else if (figura == "rectangulo") {
        for (let i = 1 ; i <= altura ; i++) /* Empieza con i = 1, luego se suma 1 a i hasta que llegue a el numero escrito por el usuario en "altura" */ 
            {result += caracter.repeat(altura) + "\n"; } /* La vuelta de el bucle agrega el numero de caracteres que comparte con la altura, generando un bloque de n X n */
    };
    
    contenedorResult.textContent = result;
});