const inputFigura = document.getElementById('figure');
const inputCaracter = document.getElementById('car');
const inputAltura = document.getElementById('alt');
const inputBase = document.getElementById('base');
const divBase = document.getElementById('divBase');
const resultado = document.getElementById('resultado');
const btnMostrar = document.getElementById('btnMostrar');

inputFigura.addEventListener('change', () => {
    divBase.style.display = inputFigura.value === '2' ? 'block' : 'none';
    resultado.textContent = '';
});

btnMostrar.addEventListener('click', e => {
    e.preventDefault();

    const figura = inputFigura.value;
    const caracter = inputCaracter.value;
    const altura = parseInt(inputAltura.value);
    const base = parseInt(inputBase.value);

    if (caracter === '' || isNaN(altura) || altura < 1) return;
    if (figura === '2' && (isNaN(base) || base < 1)) return;

    let texto = '';

    if (figura === '1') {
        for (let i = 0; i < altura; i++) {
            texto += caracter.repeat(i + 1) + '\n';
        }   

    } else if (figura === '2') {
        for (let i = 0; i < altura; i++) {
            texto += caracter.repeat(base) + '\n';
        }

    }

    resultado.textContent = texto;
});
