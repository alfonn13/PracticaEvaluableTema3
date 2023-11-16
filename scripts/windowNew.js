// windowNew.js
export const openNewWindow = () => {
    const newWindow = window.open("ventanaNueva.html", "_blank");

    newWindow.onload = () => {
        const infoContainer = newWindow.document.createElement('div');
        infoContainer.innerHTML = `
            <h1>Ejemplo de Ventana Nueva</h1>
            <p><strong>URL Completa:</strong> ${newWindow.location.href}</p>
            <p><strong>Protocolo utilizado:</strong> ${newWindow.location.protocol}</p>
            <iframe src='https://hotellallastra.app/inicio' width='800' height='600'></iframe>
            <div>
                <button id="closeBtn">Cerrar ventana</button>
            </div>
        `;
        newWindow.document.body.appendChild(infoContainer);

        const closeBtn = newWindow.document.getElementById("closeBtn");
        closeBtn.addEventListener("click", () => {
            newWindow.close();
        });
    };
}

