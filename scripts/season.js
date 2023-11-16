import { dia, mes, anio } from "./age.js";

// Función que calcula la estacion del año en la que naciste
export const calcularEstacionDelAno = () => {
    
    let estacion = "";
    if ((mes === 2 && dia >= 20) || (mes === 3) || (mes === 4 && dia < 21) || (mes===5 && dia < 21)) {
    estacion = "<strong>Primavera</strong>";
    } else if ((mes === 5 && dia >= 21) || (mes === 6) || (mes === 7 && dia <= 22) || (mes === 8 && dia < 23)) {
        estacion = "<strong>Verano</strong>";
    } else if ((mes === 8 && dia >= 23) || (mes === 9) || (mes === 10 && dia <= 20)) {
        estacion = "<strong>Otoño</strong>";
    } else {
        estacion = "<strong>Invierno</strong>";
    }


    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Naciste un feliz dia de <strong> ${estacion} </strong> del año <strong>${anio}</strong>.`;
    document.body.appendChild(mensaje);
};



