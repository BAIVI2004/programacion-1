let criptos = ['Bitcoin','Etherum','Theter','BNB','Cardano','Dai','Helium','Shiba inu','Tron','Cronos','Solana']

criptos.unshift('Stellar')
console.log(criptos)

const posicion = criptos.indexOf("Shiba inu");
const numeroElementos = 2;
criptos.splice(posicion,numeroElementos)
console.log(criptos)

criptos.push('Gate')
console.log(criptos)

const primero = criptos[1]
console.log( 'primer elemento'+primero)

const posicionar_criptos = () =>{

    const longitud = criptos.length
    const ultimo = criptos[longitud-1]

    const indice= criptos.indexOf("Helium")
    const Helium = criptos[indice]

    document.getElementById("p_resultado").textContent= 'la longitud del arreglo es: '+longitud+ '-' +' en pantalla se muestra el elemento: '+Helium

    document.getElementById("ultimo").textContent= ultimo
}


document.getElementById("btn_calcular").addEventListener("click",posicionar_criptos)