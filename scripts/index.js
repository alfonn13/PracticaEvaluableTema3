import {datos} from "./data.js";
import {nombreLength} from "./nombreLength.js";
import { firsendLetter } from "./first-endLetter.js";
import { calcularEdad } from "./age.js";
import { calcularEstacionDelAno } from "./season.js";
import { coseno } from "./coseno.js";
import { majorNum } from "./numList.js";
import { random } from "./numRandom.js";

document.addEventListener("DOMContentLoaded" ,()=>{
    datos();
    nombreLength();
    firsendLetter();
    calcularEdad();
    calcularEstacionDelAno();
    coseno();
    majorNum();
    random();
})