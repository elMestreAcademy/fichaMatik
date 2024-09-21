const obtenerTextoBoton = document.getElementById("obtenerTextoBoton");
const nombre = document.getElementById("nombre");
const primer_apellido = document.getElementById("primer-apellido");
const segundo_apellido = document.getElementById("segundo-apellido");
const currentDate = document.getElementById("fecha");
const currentTime = document.getElementById("hora");
//const salida = document.getElementById("salida");

const server = "http://localhost:3000";
/*
function showCurrendatetime() {
    const ahora = new Date();
    // currentDate.innerHTML = currentTime.innerHTML = ahora.toLocaleDateString('es-ES');
    currentDate.innerHTML = ahora.toLocaleDateString('es-ES');
    currentTime.innerHTML = ahora.toLocaleTimeString('es-ES');
}

function onObtenerTexto(event) {
    showCurrendatetime()

    fetch(`${server}/texto`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario_id: 1 })
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
        body: JSON.stringify({ usuario_id: 1 })
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

function onSalida(event) {
    showCurrendatetime()

    fetch(`${server}/salida`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario_id: 1 })
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

*/

function onObtenerTexto(event) {
  const usuario_id = document.getElementById("usuario_id").value;
  fetch(`${server}/usuario/consultar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
        <div>${
          data.fichaje_id
            ? "El usuario a ingresado a las " + data.entrada + ". ¿Desea salir?"
            : "EL usuario no tiene un fichaje activo. ¿Desea entrar?"
        }</div>
        <button id='fichaje'>${data.fichaje_id ? "Salir" : "Fichar"}</button>
      `;

      document.getElementById("fichaje").addEventListener("click", () => {
        if (data.fichaje_id) {
          salida(data.usuario_id);
        } else {
          entrada(data.usuario_id);
        }
      });
    })
    .catch((error) => {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
            No hay un usuario con ese id ${usuario_id}
          `;
    });
}

function entrada() {
  const usuario_id = document.getElementById("usuario_id").value;
  fetch(`${server}/usuario/entrada`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario_id }),
  })
    .then((response) => response.text())
    .then((data) => {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
          <div>El usuario a ingresado correctametne</div>
        `;
    })
    .catch((error) => {
      console.error(error);
    });
}

function salida() {
  const usuario_id = document.getElementById("usuario_id").value;
  fetch(`${server}/usuario/salida`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario_id }),
  })
    .then((response) => response.text())
    .then((data) => {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
            <div>El usuario ha salido correctametne</div>
          `;
    })
    .catch((error) => {
      console.error(error);
    });
}

obtenerTextoBoton.addEventListener("click", onObtenerTexto);
// obtenerTextoBoton.addEventListener("click", guardarDatos);
// obtenerTextoBoton.addEventListener("click", onSalida);
