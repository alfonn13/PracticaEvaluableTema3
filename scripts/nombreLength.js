import {nombre, apellidos} from "./data.js";

//Funcion que calcula la longitud de tu nombre completo con espacios incluidos
export const nombreLength = ()=>{

    const longitudNombre = nombre.concat(" ").concat(apellidos);
    const longitud = longitudNombre.length;

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Tu nombre completo (nombre y apellidos) tiene <strong>${longitud}</strong> caracteres, incluidos espacios`;
    document.body.appendChild(mensaje);

}