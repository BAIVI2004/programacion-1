const calcular = (a,b,c) =>{
    const bloque1 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c))) /(2*a)
    const bloque2 = (-b - Math.sqrt(Math.pow(b,2)+(4*a*c))) /(2*a)
    return 'raiz 1 = '+bloque1+' raiz 2 = '+bloque2
}

const mostrar = () =>{

    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value

    const resultado = calcular(a,b,c)

    document.getElementById("h_resultado").textContent = resultado

}


    const boton = document.getElementById("btn_calcular")

    boton.addEventListener("click",mostrar)