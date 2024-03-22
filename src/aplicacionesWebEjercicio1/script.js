function cambiarNombre () {
    const nuevoNombre = prompt("¿Cuál es tu nombre?");
    const nombreRef = document.getElementById("nombre");
    nombreRef.innerHTML = nuevoNombre; 
}