let contador = 2;

export const crearTarjeta = () => {
    
    // *creación de la tarjeta
    const tarjeta = document.createElement("li");
    tarjeta.classList.add("tarjeta");
    tarjeta.id = "tarjeta" + contador;
    contador++; //cambia el id propio de cada tarjeta.

    //* creación de los componentes de la tarjeta
    const icon = document.createElement("i");
    icon.classList.add("icon");

    const imagen = document.createElement("img");
    imagen.setAttribute("alt", "icon");
    icon.appendChild(imagen);

    const description = document.createElement("span");
    description.classList.add("tarjetaDesc");
    description.innerHTML = "Descripcion";

    const tiempo = document.createElement("span");
    tiempo.classList.add("tarjetaTime");
    tiempo.innerHTML = "Time";


    const buttonOnOff = document.createElement("input");
    buttonOnOff.setAttribute("type", "checkbox");
    
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete"

    tarjeta.appendChild(icon);
    tarjeta.appendChild(description);
    tarjeta.appendChild(tiempo);
    tarjeta.appendChild(buttonOnOff);
    tarjeta.appendChild(buttonDelete);

    return tarjeta;
}