document.addEventListener("DOMContentLoaded", function() {
    let añonacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
    
    if (añonacimiento) {
        let añoactual = new Date().getFullYear();
        let edad = añoactual - parseInt(añonacimiento);
        
        if (edad >= 18) {
            alert("Puedes escoger también las bebidas con alcohol");
        } else {
            alert("No puedes escoger bebidas con alcohol");
        }
    } else {
        alert("Debes ingresar un año de nacimiento válido.");
    }
});
