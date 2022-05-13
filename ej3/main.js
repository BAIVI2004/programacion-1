const calcular=(a,b)=>{

    const parte1 = Math.pow(a,2) + Math.pow(b,2)
    const bloque1= Math.sqrt( parte1)
    return bloque1
}

const mostrar = () =>{

    const a = document.getElementById("a").value
    const b = document.getElementById("b").value

    const resultado = calcular(a,b)

    document.getElementById("h_resultado").textContent = resultado


}

const boton = document.getElementById("btn_calcular")

