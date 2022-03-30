

function calcular(){
    
     
    const b1 = prompt(`ingresa un numero: `);
    const b2 = prompt(`ingresa un numero: `);
    const h = prompt(`ingresa un numero: `);
    const resultado =((parseInt(b1) + parseInt(b2))*h)/2
    return resultado
}

function visualizar(){
    const respuesta = calcular()
    alert (respuesta)
}