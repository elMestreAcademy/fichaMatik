const obtenerTextoBoton = document.getElementById('obtenerTextoBoton');
const nombre = document.getElementById('nombre');
const primer_apellido = document.getElementById('primer-apellido');
const segundo_apellido = document.getElementById('segundo-apellido');
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
            nombre.textContent = data.nombre;
            primer_apellido.textContent = data.primer_apellido;
            segundo_apellido.textContent = data.segundo_apellido;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

obtenerTextoBoton.addEventListener('click', onObtenerTexto);