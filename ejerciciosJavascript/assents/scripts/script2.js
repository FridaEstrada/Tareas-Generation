const duplicarNumeros= function (numeros){
    const numerosDuplicados = numeros.map( function(numero) {return numero*2;});
    return numerosDuplicados;
}

const numeros=[25,36,43,50,60];
console.log(duplicarNumeros(numeros));