const form = document.getElementById('shapeForm');
const figuraSelect = document.getElementById('figura');
const groupBase = document.getElementById('groupBase');
const output = document.getElementById('output');

figuraSelect.addEventListener('change', () => {
    if (figuraSelect.value === 'rectangulo') {
        groupBase.style.display = 'block';
    } else {
        groupBase.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const figura = figuraSelect.value;
    const char = document.getElementById('caracter').value || '*';
    const altura = parseInt(document.getElementById('altura').value) || 1;
    const base = parseInt(document.getElementById('base').value) || 1;
    let resultado = '';
    
    if (figura === 'triangulo') {
        for (let i = 1; i <= altura; i++) {
            resultado += char.repeat(i) + '\n';
        }
    } else {
        for (let i = 0; i < altura; i++) {
            resultado += char.repeat(base) + '\n';
        }
    }
    output.textContent = resultado;
});