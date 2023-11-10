// Generar un número aleatorio entre 0 y 100
export const random = () =>{
    const numeroAleatorio = Math.floor(Math.random() * 101);

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `Ejemplo de número al azar: ${numeroAleatorio}`;
    document.body.appendChild(mensaje);


}

