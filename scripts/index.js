/*
Alfonso Reviejo Valle
GitHub: https://github.com/alfonn13/PracticaEvaluableTema3
*/

//Importamos las clases para que nos funcionen en nuestro index.js
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
    button();

    // Creamos el Boton reiniciar en el index.js para hacer el addEvenListener desde aqui
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reiniciar";
    document.body.appendChild(resetButton);

    // addEvenListener del Boton reiniciar
    resetButton.addEventListener("click", () => {
        location.reload();
    });
});
