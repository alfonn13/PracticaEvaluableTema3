let nombre;
let fechaNacimiento;
let apellidos;

/*Funcion que nos pide los datos necesarios con sus respectivas
comprobaciones para realizar el ejercicio*/
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
    /*Expresión regular para validar el formato dd/mm/aaaa (Validando dias que
     como maximo sera 31, meses sabiendo que solo hay 12 y año introducido)*/
    const fecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    while(!fecha.test(fechaNacimiento)){
        alert("Introduce un fecha correcta.");
        fechaNacimiento = prompt("Introduce tus fecha nacimiento dd/mm/aaaa:");
    }

    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    //Para sacar El buenos dias nombre
    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Buenos días, <strong>${nombre}</strong>`;
    document.body.appendChild(mensaje);

}

export{nombre, apellidos, fechaNacimiento};