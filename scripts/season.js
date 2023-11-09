import { dia, mes, anio } from "./age.js";

export const calcularEstacionDelAno = () => {
    // Determinar la estación del año
    let estacion = "";
    if ((mes === 3 && dia >= 20) || (mes === 4) || (mes === 5 && dia < 21)) {
        estacion = "Primavera";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        estacion = "Verano";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia >= 1 && dia <= 31) || (mes === 11 && dia <= 30) || (mes === 12 && dia <= 21)) {
        estacion = "Otoño";
    } else {
        estacion = "Invierno";
    }

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Naciste en la estación del año: ${estacion}.`;
    document.body.appendChild(mensaje);
};



