const turno = document.getElementById('turno');
const horas = document.getElementById('horas');
const pagohora = document.getElementById('pagohora');
const sueldo = document.getElementById('sueldo');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

btnLimpiar.addEventListener('click', () => {
    turno.value = '';
    horas.value = '';
    pagohora.value = '';
    sueldo.value = '';
});

btnCalcular.addEventListener('click', () => {
    const valorTurno = turno.value.trim().toLowerCase();
    const numHoras = parseFloat(horas.value);
    const pagoxHora = parseFloat(pagohora.value);
    let resultado = 0;

    if (isNaN(numHoras) || isNaN(pagoxHora)) {
        alert('Ingresa valores numéricos válidos en horas y pago por hora');
        return;
    }

    if (valorTurno === 'matutino') {
        resultado = numHoras * pagoxHora;
    }
    else if (valorTurno === 'vespertino') {
        const pagoVespertino = pagoxHora + (pagoxHora * 0.03);
        resultado = numHoras * pagoVespertino;
    }
    else if (valorTurno === 'nocturno') {
        const pagoNocturno = pagoxHora + (pagoxHora * 1);
        resultado = numHoras * pagoNocturno;
    }
    else {
        alert('Turno no válido (matutino, vespertino o nocturno)');
        return;
    }

    sueldo.value = resultado.toFixed(2);
});