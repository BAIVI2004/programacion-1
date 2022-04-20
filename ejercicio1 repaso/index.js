function calcular(grados){
    const resultado = (grados * (9/5) + 32 )   
    return resultado
}


function mostrar()
{
    const grados = document.querySelector("#dato").value
    const resultado = calcular(grados)
  document.getElementById("h_resultado").textContent = resultado
    
}