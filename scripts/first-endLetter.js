import { nombre, apellidos} from "./data.js";

export const firsendLetter = () => {
    let letra = 'A';
    letra = letra.toLowerCase();

    // Convertir el nombre a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas
    const nombreCompleto = nombre.concat(" ").concat(apellidos);
    console.log(nombreCompleto)

    const nombreLowerCase = nombreCompleto.toLowerCase();

    // Buscar la primera aparición de la letra en el nombre
    const firstIndex = nombreLowerCase.indexOf(letra)+1;

    // Buscar la última aparición de la letra en el nombre
    const lastIndex = nombreLowerCase.lastIndexOf(letra)+1;

    let mensaje = document.createElement("p");

    if (firstIndex !== -1) {
        mensaje.innerHTML = `<strong>La primera letra 'A' </strong>de tu nombre está en la posición ${firstIndex}.`;
    } else {
        mensaje.innerHTML = `No se encontró la letra 'A' en tu nombre.`;
    }

    if (lastIndex !== -1) {
        mensaje.innerHTML += `<p><strong>La última letra 'A'</strong> de tu nombre está en la posición ${lastIndex}.</p>`;
    } else {
        mensaje.innerHTML += `<p>No se encontró la letra 'A' en tu nombre.</p>`;
    }

    // Verificar si el nombre tiene al menos tres letras
    if (nombreCompleto.length >= 3) {
        // Utilizar slice para obtener una nueva cadena sin las tres primeras letras
        const nuevoNombre = nombreCompleto.slice(3);

        
        mensaje.innerHTML += `<p>Tu nombre <strong>menos las tres primeras letras</strong> es <strong>${nuevoNombre}</strong></p>`;
        document.body.appendChild(mensaje);
    } else {
        
        mensaje.innerHTML += "<p>Tu nombre no tiene al menos tres letras.</p>";
        document.body.appendChild(mensaje);
    }


    document.body.appendChild(mensaje);
};
