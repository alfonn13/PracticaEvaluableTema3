export const majorNum = ()=>{
    const listaNumeros = [34, 67, 23, 75, 35, 19];
    const numeroMayor = Math.max(...listaNumeros);

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `El número mayor de (${listaNumeros.join(", ")}) es: ${numeroMayor}.`;
    document.body.appendChild(mensaje);

}


