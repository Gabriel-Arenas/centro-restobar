if (window.location.pathname.includes("bebidas")) {
  
    const añodeNacimiento = prompt("¿Cuál es tu año de nacimiento?");
    
    if (añodeNacimiento) {
       
        const añoactual = new Date().getFullYear();
        const edad = añoactual - añodeNacimiento;
        
        
        if (edad < 18) {
            
            alert("No puedes escoger bebidas con alcohol");
    
        } else {
            
            alert("Puedes escoger también las bebidas con alcohol");
        }
}
