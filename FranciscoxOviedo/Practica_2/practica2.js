
const tipoFigura = document.getElementById("tipoFigura");
const opcionBase = document.getElementById("opcionBase");
const botonDibujar = document.getElementById("dibujar");
const figuraResultado = document.getElementById("figuraResultado");

tipoFigura.addEventListener("change", function() {

    if (tipoFigura.value == "rectangulo") {
        opcionBase.style.display = "block";
    } else {
        opcionBase.style.display = "none";
    }

    figuraResultado.textContent = "";
});

botonDibujar.addEventListener("click", function() {

    let simbolo = document.getElementById("simbolo").value;
    let filas = Number(document.getElementById("filas").value);
    let columnas = Number(document.getElementById("columnas").value);
    let dibujo = "";
    if (simbolo == "") {
        simbolo = "*";
    }
    if (filas <= 0 || !Number.isInteger(filas)) {
        figuraResultado.textContent = "Ingresa una altura válida.";
        return;
    }

    if (tipoFigura.value == "triangulo") {
        for (let i = 1; i <= filas; i++) {
            dibujo += simbolo.repeat(i) + "\n";
        }
    } else {
        if (columnas <= 0 || !Number.isInteger(columnas)) {
            figuraResultado.textContent = "Ingresa una base válida.";
            return;
        }
        for (let i = 1; i <= filas; i++) {
            dibujo += simbolo.repeat(columnas) + "\n";
        }
    }
    figuraResultado.textContent = dibujo;
});
