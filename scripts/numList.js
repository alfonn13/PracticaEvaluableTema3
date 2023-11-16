//Funcion que saca el numero mayor de una lista de Números

export const majorNum = ()=>{
    const listaNumeros = [34, 67, 23, 75, 35, 19];
    const numeroMayor = Math.max(...listaNumeros);

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `El número mayor de <strong>(${listaNumeros.join(", ")})</strong> es ${numeroMayor}.`;
    document.body.appendChild(mensaje);

}


