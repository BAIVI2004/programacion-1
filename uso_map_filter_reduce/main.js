const tareas =[
    {
        nombre:'testeando soft',
        duracion:25
    },
    {
        nombre:'implementacion de alta cliente',
        duracion:90
    },
    {
        nombre:'actualiza cliente',
        duracion:40
    },
    {
        nombre:'deploy de soft',
        duracion:120
    },
    {
        nombre:'correccion de bug',
        duracion:180
    }
]

//uso del metodo map()

let nombres = []
tareas.forEach(element => {
    nombres.push(element.nombre)
});


//aplicando map()
let nombre2 = tareas.map(tarea => tarea.nombre)

/**
 * uso de filter
*/
let tareas_prolongadas=[]
tareas.forEach(element => {
    
    if(element.duracion>=120){
        tareas_prolongadas.push(element)
    }
});


console.log(tareas_prolongadas)
//filtrar haciendo uso del metodo filter()

const tareas_prolongadas2= tareas.filter(tarea=>{ tareas.duracion>=120})
console.log(tareas_prolongadas2)


