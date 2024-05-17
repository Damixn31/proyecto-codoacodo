const nombre = document.getElementById("name");
const email = document.getElementById("email");
const motivo = document.getElementById("reason");
const mensaje = document.getElementById("message");
const precauciones = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault();
    if (!nombre.value) {
        alert("El nombre es necesario");
    }
    if (!email.value) {
        alert("El email es necesario");
    }
    if (!motivo.value) {
        alert("Seleccione su motivo de su mensaje")
    }
    if (!mensaje.value) {
        alert("El mensaje no puede estar vacio");
    } else {
        alert("Mensaje enviado, Gracias por contactarse con nosotros")
    }
})