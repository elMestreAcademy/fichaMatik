const obtenerTextoBoton = document.getElementById('obtenerTextoBoton');
const nombre = document.getElementById('nombre');
const primer_apellido = document.getElementById('primer-apellido');
const segundo_apellido = document.getElementById('segundo-apellido');
const currentDate = document.getElementById('fecha');
const currentTime = document.getElementById('hora');

const server = "http://localhost:3000"

function onObtenerTexto(event) {
    const ahora = new Date();
    // currentDate.innerHTML = currentTime.innerHTML = ahora.toLocaleDateString("es-ES");
    currentDate.innerHTML = ahora.toLocaleDateString("es-ES");
    currentTime.innerHTML = ahora.toLocaleTimeString("es-ES");
    
    fetch(`${server}/texto`)
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

function guardarDatos(event, currentDate) {
    fetch(`${server}/guardar-fecha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentDate })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Mostrar un mensaje al usuario indicando si se guardaron los datos correctamente
    })
    .catch(error => {
        console.error(error);
    });
    
}

obtenerTextoBoton.addEventListener('click', onObtenerTexto);
obtenerTextoBoton.addEventListener('click', guardarDatos);
