let lenguajes=["Python","JavaScript","Csharp","C++","Java","PHP","Ruby"]

function mostrar(){
    const longitud = lenguajes.length
    console.log(`longitud del arreglo:`+longitud)
    const ultimo = lenguajes [longitud-1]
    console.log(`ultimo elemento:`+ultimo)
    const tercero = lenguajes [2]
    console.log(`tercer elemento`+tercero)
}

function mostrar2 (){
    lenguajes.forEach( (element,index) => {
        console.log(index+' - '+element)
    });
}

lenguajes.push(`Go`)
console.log(lenguajes)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift("Kotlin")
console.log(lenguajes)

const indice = lenguajes.indexOf("Java")
const posicion =4;
const numeroElementos = 2;
const elementosEliminados=lenguajes.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(lenguajes)


console.log(lenguajes)