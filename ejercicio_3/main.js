function calcular(R)
{

    const resultado = Math.PI *  Math.pow(R,2)
    return resultado
}





function mostrar()
{

    const dato1 = document.querySelector("#inp_radio").value

    const respuesta = calcular(dato1)

    document.getElementById("respuesta").textContent = respuesta

}