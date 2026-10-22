const figura = document.getElementById('figura');
const campoBase = document.getElementById('campoBase');
const caracter = document.getElementById('caracter');
const base = document.getElementById('base');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

function actualizarCampos() {
    const esRectangulo = figura.value === 'rectangulo';
    campoBase.hidden = !esRectangulo;
    base.required = esRectangulo;
    resultado.textContent = '';
}

function dibujarFigura() {
    if (caracter.value.length !== 1) {
        resultado.textContent = 'Ingresa un carácter para dibujar la figura.';
        return;
    }

    const filas = Number(altura.value);
    if (!Number.isInteger(filas) || filas < 1) {
        resultado.textContent = 'Ingresa una altura entera mayor que cero.';
        return;
    }

    const lineas = [];
    if (figura.value === 'rectangulo') {
        const columnas = Number(base.value);
        if (!Number.isInteger(columnas) || columnas < 1) {
            resultado.textContent = 'Ingresa una base entera mayor que cero.';
            return;
        }
        for (let fila = 0; fila < filas; fila++) {
            lineas.push(caracter.value.repeat(columnas));
        }
    } else if (figura.value === 'triangulo') {
        for (let fila = 1; fila <= filas; fila++) {
            lineas.push(caracter.value.repeat(fila));
        }
    }
    resultado.textContent = lineas.join('\n');
}

function limpiar() {
    caracter.value = '';
    base.value = '';
    altura.value = '';
    resultado.textContent = '';
}

figura.addEventListener('change', actualizarCampos);
document.getElementById('dibujar').addEventListener('click', dibujarFigura);
document.getElementById('limpiar').addEventListener('click', limpiar);
actualizarCampos();