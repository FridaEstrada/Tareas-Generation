let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("Imprimiendo todos los nombres del arreglo: " +(people.join(" "))); //Imprime los elementos en formato string

people.splice(1,1); //Borra 1 elemento en el index 1

console.log("Removiendo a Dani del arreglo: " + people);

people.splice(2,1); //Borra 1 elemento en el index 2

console.log("Removiendo a Juan del arreglo: " + people);

people.unshift(people.splice(1,1));

console.log("Moviendo a Luis al principio del arreglo: " + people);

people.push("Frida");

console.log("Agregando a Frida al final del arreglo: " + people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break; 
    }
}

console.log( "Index de Maria: " + people.indexOf("Maria"));




