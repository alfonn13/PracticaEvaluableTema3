import { fechaNacimiento } from "./data.js";

let dia;
let mes;
let anio;

//Funcion que calcula tu Edad a traves de la Fecha Introducida en data.js
export const calcularEdad = () => {
    // Obtener la fecha de nacimiento del string
    const partesFecha = fechaNacimiento.split("/");
    dia = parseInt(partesFecha[0], 10);
    mes = parseInt(partesFecha[1], 10)-1; // Meses en JavaScript empiezan desde el 0
    anio = parseInt(partesFecha[2], 10);


    const fechaNacimientoObj = new Date(anio, mes, dia);

    const fechaActual = new Date();

    const diferenciaMillis = fechaActual - fechaNacimientoObj;

    const edadEnAnios = Math.floor(diferenciaMillis / (365.25 * 24 * 60 * 60 * 1000));

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Tu <strong> edad </strong> es <strong> ${edadEnAnios} </strong> años.`;
    document.body.appendChild(mensaje);
};

export {dia, mes, anio};

 