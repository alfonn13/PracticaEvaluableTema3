let nombre;
let fechaNacimiento;
let apellidos;

export const datos = () => {

    nombre = prompt("Introduce tu nombre:");
    while(!nombre || !isNaN(nombre)){
        alert("Introduce un nombre correcto.")
        nombre = prompt("Introduce tu nombre:");
    }

    apellidos = prompt("Introduce tus apellidos:");
    while(!apellidos || !isNaN(apellidos)){
        alert("Introduce un apellido correcto.");
        apellidos = prompt("Introduce tu apellido:");
    }

    fechaNacimiento = prompt("Introduce tus fecha nacimiento dd/mm/aaaa:");
    const fecha=/^\d{2}\/\d{2}\/\d{4}$/;
    while(!fecha.test(fechaNacimiento)){
        alert("Introduce un fecha correcta.");
        fechaNacimiento = prompt("Introduce tus fecha nacimiento dd/mm/aaaa:");
    }

    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    //Para sacar El buenos dias nombre
    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Buenos días <strong>${nombre}</strong>`;
    document.body.appendChild(mensaje);

    
}

export{nombre, apellidos, fechaNacimiento};