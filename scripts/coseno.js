export const coseno = () => {
    const grados = 180;
    const radianes = grados * (Math.PI / 180); // Convierte grados a radianes
    const coseno = Math.cos(radianes);
  
    const mensaje = document.createElement("p");
    mensaje.innerHTML = `<strong>El coseno de ${grados} grados </strong> es <strong>${coseno}</strong>`;
    document.body.appendChild(mensaje);
  };
  
