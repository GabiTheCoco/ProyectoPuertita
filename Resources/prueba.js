

const ejecutarPrueba = (list) => {

    let contador = 0;
    list.forEach(element => {
        element.addEventListener("click",() => alert("esto funciona pan"));  
    });

}

export default ejecutarPrueba;