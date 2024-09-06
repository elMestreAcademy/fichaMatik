const obtenerTextoBoton = document.getElementById('obtenerTextoBoton');
const resultadoDiv = document.getElementById('resultado');

obtenerTextoBoton.addEventListener('click', () => {
  fetch('http://localhost:3000/texto')
    .then(response => response.json())
    .then(data => {
      resultadoDiv.textContent = data.nombre;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});