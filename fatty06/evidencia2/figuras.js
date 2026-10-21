function cambiarFifura() {
    const figura = document.getElementById("figura").value;
    const grupoBase = document.getElementById("grupoBase");
   
    if (figura === "rectangulo") {
        grupoBase.style.display = "block";
    } else {
        grupoBase.style.display = "none";
    }   
}

function dibujarFigura() {
    const figura = document.getElementById("figura").value;
    const caracter = document.getElementById("caracter").value || "*";
    const altura = parseInt(document.getElementById("altura").value);
    const resultadoPre = document.getElementById("resultado");

    let salida = "";

    if(isNaN(altura) || altura <= 0) {
        resultadoPre.textContent = "Por favor, ingrese una altura válida (número positivo).";
        return;
    }   

    if(figura === "triangulo") {
        for(let i = 1; i <= altura; i++) {
            let linea ="";
            for(let j = 1; j <= i; j++) {
                linea += caracter;
            }
            salida += linea + "\n";
        }
    } else if(figura === "rectangulo") {  
        const base = parseInt(document.getElementById("base").value);
        if(isNaN(base) || base <= 0) {
            resultadoPre.textContent = "Por favor, ingrese una base válida (número positivo).";
            return;
        }
        for(let i = 1; i <= altura; i++) {
            let linea = "";
            for(let j = 1; j <= base; j++) {
                linea += caracter;
            }
            salida += linea + "\n";
        }
    }

    resultadoPre.textContent = salida;
}