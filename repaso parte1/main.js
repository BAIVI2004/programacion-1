let consolas = ['play station','xbox','nintendo game cube','sega dreamcast','game boy advanced']


//b:como eliminar elementos en sus posiciones
const posicion =2;
const numeroElementos = 2;
consolas.splice(posicion,numeroElementos)
console.log(consolas)

//c:se agrega un elemento al final
consolas.push('nintendo 64')
console.log(consolas)

//se agrega al principio un elemento del array
consolas.unshift('nintendo wii')
console.log(consolas)

//copiamos todo el let
let copia = consolas.slice()
console.log(consolas)



const primero = consolas[1]
console.log( 'primer elemento'+primero)




const agrupar_consolas = () =>{

    const longitud = consolas.length
    const ultimo = consolas[longitud-1]

    const indice= consolas.indexOf("xbox")
    const xbox = consolas[indice]

    document.getElementById("p_resultado").textContent= 'la longitud del arreglo es: '+longitud+ '-' +' en pantalla se muestra el elemento: '+xbox 

    document.getElementById("ultimo").textContent= ultimo
}


document.getElementById("btn_calcular").addEventListener("click",agrupar_consolas)