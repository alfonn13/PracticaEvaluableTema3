import { openNewWindow } from "./windowNew.js";

//Funcion que crea un boton y abra la ventana nueva
export const button = () => {
    const boton1 = document.createElement("button");
    boton1.textContent = "Abrir Ventana";
    document.body.appendChild(boton1);
    boton1.addEventListener("click", () => {
        openNewWindow();
    });
};


