import { fechaNacimiento } from "./data.js";

let dia;
let mes;
let anio;

export const calcularEdad = () => {
    // Obtener la fecha de nacimiento del string
    const partesFecha = fechaNacimiento.split("/");
    dia = parseInt(partesFecha[0], 10);
    mes = parseInt(partesFecha[1], 10)-1; // Meses en JavaScript son 0-indexados
    anio = parseInt(partesFecha[2], 10);


    // Crear un objeto Date con la fecha de nacimiento
    const fechaNacimientoObj = new Date(anio, mes, dia);

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha de nacimiento
    const diferenciaMillis = fechaActual - fechaNacimientoObj;

    // Calcular la edad en años
    const edadEnAnios = Math.floor(diferenciaMillis / (365.25 * 24 * 60 * 60 * 1000));

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Tu <strong> edad </strong> es <strong> ${edadEnAnios} </strong> años.`;
    document.body.appendChild(mensaje);
};

export {dia, mes, anio};

 