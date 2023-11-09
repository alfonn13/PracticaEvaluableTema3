import {nombre, apellidos} from "./data.js";

export const nombreLength = ()=>{

    const longitudNombre = nombre.concat(" ").concat(apellidos);
    const longitud = longitudNombre.length;

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Tu nombre completo (nombre y apellidos) tiene ${longitud} caracteres`;
    document.body.appendChild(mensaje);
    

}