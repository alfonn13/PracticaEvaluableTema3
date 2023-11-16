// index.js
import { datos } from "./data.js";
import { nombreLength } from "./nombreLength.js";
import { firsendLetter } from "./first-endLetter.js";
import { calcularEdad } from "./age.js";
import { calcularEstacionDelAno } from "./season.js";
import { coseno } from "./coseno.js";
import { majorNum } from "./numList.js";
import { random } from "./numRandom.js";
import { button } from "./windowsbutton.js";

document.addEventListener("DOMContentLoaded", () => {
    datos();
    nombreLength();
    firsendLetter();
    calcularEdad();
    calcularEstacionDelAno();
    coseno();
    majorNum();
    random();
    button(); // Llama a la función que crea el botón

    // Crea un botón en JavaScript
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reiniciar Página";
    document.body.appendChild(resetButton);

    // Agrega un listener al botón de reinicio
    resetButton.addEventListener("click", () => {
        // Recarga la página
        location.reload();
    });
});
