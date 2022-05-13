function calcular(){

    const dato1 = document.getElementById("autos").value

    let resultado=null

    if (dato1 == 1750000) {
        resultado= 1750000 -  ((1750000*15)/100)
    } else {
    
        if (dato1 == 1950000) {
            resultado= 1950000 - ( (1950000*5)/100 )
         } else {
            resultado= 2560000 - (  (2560000*10)/100 )
         }

    }

    document.getElementById("resultado").textContent = resultado

}