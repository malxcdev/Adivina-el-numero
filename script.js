document.addEventListener('DOMContentLoaded', () => {
    let numeroRandom = generarNumeroAleatorio();
    let contadorIntentos = 0;

    const botonGuardar = document.getElementById('guardarBtn');
    const botonReiniciar = document.getElementById('reiniciarBtn');
    const inputNumero = document.getElementById('input');
    const resultado = document.getElementById('resultado');
    const intentos = document.getElementById('intentos');

    function generarNumeroAleatorio() {
        const numero = Math.floor(Math.random() * 100) + 1;
        console.log(`Número aleatorio (para depuración): ${numero}`); // Elimina esto en producción
        return numero;
    }

    botonGuardar.addEventListener('click', () => {
        const numeroIngresado = parseInt(inputNumero.value, 10);

        // Validaciones
        if (isNaN(numeroIngresado)) {
            resultado.innerText = "Por favor, ingresa un número válido.";
            return;
        }

        if (numeroIngresado < 1 || numeroIngresado > 100) {
            resultado.innerText = "El número debe estar entre 1 y 100.";
            return;
        }

        contadorIntentos++;
        intentos.innerText = `Intentos: ${contadorIntentos}`;

        if (numeroIngresado === numeroRandom) {
            resultado.innerText = `¡Felicidades! Has adivinado el número en ${contadorIntentos} intentos.`;
            botonGuardar.disabled = true;
        } else if (numeroIngresado < numeroRandom) {
            resultado.innerText = "El número es mayor.";
        } else {
            resultado.innerText = "El número es menor.";
        }
    });

    botonReiniciar.addEventListener('click', () => {
        numeroRandom = generarNumeroAleatorio();
        contadorIntentos = 0;
        intentos.innerText = `Intentos: ${contadorIntentos}`;
        resultado.innerText = "";
        inputNumero.value = "";
        botonGuardar.disabled = false;
    });
});
