import { dia, mes, anio } from "./age.js";

export const calcularEstacionDelAno = () => {
    // Determinar la estación del año
    console.log(dia);
    console.log(mes);
    console.log(anio);

    let estacion = "";
    if ((mes === 2 && dia >= 20) || (mes === 3) || (mes === 4 && dia < 21) || (mes===5 && dia < 21)) {
    estacion = "Primavera";
    } else if ((mes === 5 && dia >= 21) || (mes === 6) || (mes === 7 && dia <= 22) || (mes === 8 && dia < 23)) {
        estacion = "Verano";
    } else if ((mes === 8 && dia >= 23) || (mes === 9) || (mes === 10 && dia <= 20)) {
        estacion = "Otoño";
    } else {
        estacion = "Invierno";
    }


    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Naciste un feliz dia de ${estacion} del año ${anio}.`;
    document.body.appendChild(mensaje);
};



