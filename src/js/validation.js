const nombre = document.getElementById("name");
const email = document.getElementById("email");
const motivo = document.getElementById("reason");
const mensaje = document.getElementById("message");
const errores = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault();
    let errores = [];
    if (!nombre.value) {
        errores.push("El nombre es necesario");
    }
    if (!email.value) {
        errores.push("El email es necesario");
    }
    if (!motivo.value) {
        errores.push("Seleccione su motivo de su mensaje")
    }
    if (!mensaje.value) {
        errores.push("El mensaje no puede estar vacio");

    } if (errores.length > 0) {
        alert(errores.join("\n"))
    } else {
        alert("Mensaje enviado, Gracias por contactarse con nosotros")
    }
})