
const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const divAltura = document.getElementById("divAltura");
const divBase = document.getElementById("divBase");
const botonMostrar = document.getElementById("mostrar");
const salida = document.getElementById("salida");


divAltura.style.display = "none";
divBase.style.display = "none";


selectFigura.addEventListener("change", function () {
    const figura = selectFigura.value;

    divAltura.style.display = "block"; 

    if (figura === "triangulo") {
        divBase.style.display = "none";
        inputBase.disabled = true;
        inputBase.value = "";
    } else if (figura === "rectangulo") {
        divBase.style.display = "block";
        inputBase.disabled = false;
    }

    salida.innerHTML = ""; 
});


botonMostrar.addEventListener("click", function () {
    const figura = selectFigura.value;
    const caracter = inputCaracter.value;
    const altura = parseInt(inputAltura.value);
    const base = parseInt(inputBase.value);

    salida.innerHTML = "";

    
    if (figura === "") {
        alert("Selecciona una figura");
        return;
    }
    if (caracter === "") {
        alert("Escribe un carácter");
        return;
    }
    if (isNaN(altura) || altura < 1) {
        alert("Escribe una altura válida");
        return;
    }
    if (figura === "rectangulo" && (isNaN(base) || base < 1)) {
        alert("Escribe una base válida");
        return;
    }

    
    if (figura === "triangulo") {
        for (let i = 1; i <= altura; i++) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += caracter;
            }
            agregarLinea(linea);
        }
    } else if (figura === "rectangulo") {
        for (let i = 1; i <= altura; i++) {
            let linea = "";
            for (let j = 1; j <= base; j++) {
                linea += caracter;
            }
            agregarLinea(linea);
        }
    }
});


function agregarLinea(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    li.style.listStyle = "none";
    li.style.fontFamily = "monospace";
    salida.appendChild(li);
}