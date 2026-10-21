/* Creación de Figuras */
const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const campoBase = document.getElementById("campoBase");
const outputResultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");

/* Mostrar y Ocultar el campo de Base */
inputFigura.addEventListener("change", e => {
    if (inputFigura.value == "triangulo")
        campoBase.hidden = true;
    else 
        campoBase.hidden = false;

    outputResultado.textContent = "";
});

/* Mostrar la figura */
btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let dibujo = "";

    if (caracter.trim() == "") {
        alert("Escribe un carácter.");
        return;
    }

    if (inputAltura.value == "") {
        alert("Ingresa una altura.");
        return;
    }

    if (altura < 1) {
        alert("La altura debe ser mayor a 0.");
        return;
    }

    if (altura > 50) {
        alert("La altura no puede ser mayor a 50.");
        return;
    }
    
    /* Creación del triángulo */
    if (inputFigura.value == "triangulo") {
        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(i) + "\n";
        }
    } else {
        let base = parseInt(inputBase.value);

        if (inputBase.value == "") {
            alert("Ingresa una base.");
            return;
        }

        if (base < 1) {
            alert("La base debe ser mayor a 0.");
            return;
        }

        if (base > 50) {
            alert("La base no puede ser mayor a 50.");
            return;
        }

        /* Creación del rectángulo */
        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(base) + "\n";
        }
    }
    outputResultado.textContent = dibujo;
});