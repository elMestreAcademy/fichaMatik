const obtenerTextoBoton = document.getElementById("obtenerTextoBoton");
const nombre = document.getElementById("nombre");
const primer_apellido = document.getElementById("primer-apellido");
const segundo_apellido = document.getElementById("segundo-apellido");
const currentDate = document.getElementById("fecha");
const horaRecuperada = document.getElementById('hora-recuperada');

const server = "http://localhost:3000";

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
            ? data.nombre + " " + data.primer_apellido + " " + data.segundo_apellido + " ha ingresado a las " + data.entrada + ". ¿Desea salir?"
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
            <div>El usuario ha salido correctamente</div>
          `;
    })
    .catch((error) => {
      console.error(error);
    });
}

obtenerTextoBoton.addEventListener("click", onObtenerTexto);

