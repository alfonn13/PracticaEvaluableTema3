
export const window = () =>{
    const info = document.createElement("div");

    info.innerHTML = `<p><strong>URL Completa:</strong> ${ventanaNueva.location.href}</p>
                    <p><strong>Protocolo utilizado:</strong> ${ventanaNueva.location.protocol}</p>
                    <iframe src='https://hotellallastra.app/inicio' width='800' height='600'></iframe>
                    <div>
                        <button id="closeBtn">Cerrar ventana</button>
                    </div>`;
}
