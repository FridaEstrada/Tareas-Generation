const sumaNumeros = function(numeros){
    const suma =numeros.reduce((acumulado, valorActual) => acumulado + valorActual);
    return suma;
}

const multiplicaNumeros = function(numeros){
    const multiplicacion =numeros.reduce((acumulado, valorActual) => acumulado * valorActual);
    return multiplicacion;
}

const numeros = [1, 2, 3, 4];

console.log(`La suma es ${sumaNumeros(numeros)}`);

console.log("El producto es " + multiplicaNumeros(numeros));

