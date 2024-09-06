const obtenerTextoBoton = document.getElementById('obtenerTextoBoton');
const resultadoDiv = document.getElementById('resultado');
const currentDate = document.getElementById('fecha');
const currentTime = document.getElementById('hora');

function onObtenerTexto(event) {
    const ahora = new Date();
    // currentDate.innerHTML = currentTime.innerHTML = ahora.toLocaleDateString("es-ES");
    currentDate.innerHTML = ahora.toLocaleDateString("es-ES");
    currentTime.innerHTML = ahora.toLocaleTimeString("es-ES");
    
    fetch('http://localhost:3000/texto')
        .then(response => response.json())
        .then(data => {
            resultadoDiv.textContent = data.nombre;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

obtenerTextoBoton.addEventListener('click', onObtenerTexto);