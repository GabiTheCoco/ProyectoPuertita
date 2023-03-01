// * acá se puede cambiar el nombre de la constante y puede ir sin llaves, ya que existe un único módulo default por archivo que exportar
// import kisde from "./Resources/prueba.js";
import { crearTarjeta } from "./Resources/crearTarjeta.js";

let botonAgregarTarjeta = document.querySelector(".botoncito");
let lista = document.querySelector(".lista");

botonAgregarTarjeta.addEventListener("click", () => {
    lista.appendChild(crearTarjeta());
})


