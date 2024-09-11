const obtenerTextoBoton = document.getElementById('obtenerTextoBoton');
const nombre = document.getElementById('nombre');
const primer_apellido = document.getElementById('primer-apellido');
const segundo_apellido = document.getElementById('segundo-apellido');
const currentDate = document.getElementById('fecha');
const currentTime = document.getElementById('hora');

const server = "http://localhost:3000"

function showCurrendatetime() { 
    const ahora = new Date();
    // currentDate.innerHTML = currentTime.innerHTML = ahora.toLocaleDateString("es-ES");
    currentDate.innerHTML = ahora.toLocaleDateString("es-ES");
    currentTime.innerHTML = ahora.toLocaleTimeString("es-ES");
}

function onObtenerTexto(event) {
    showCurrendatetime()
    
    fetch(`${server}/texto`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usuario_id: 1})
        }        
    )
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

function guardarDatos(event) {
    showCurrendatetime()

    fetch(`${server}/fichar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario_id: 1})
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
