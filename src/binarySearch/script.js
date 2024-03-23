const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let left = 1;
let right = 100;

let mid = Math.floor((left + right) / 2);
document.getElementById(
  "text"
).innerHTML = `Hola! <br> Piensa en un número por favor. <br><br>¿Tu número es mayor que ${mid}?`;
console.log(`¿Tu número es mayor que ${mid}? (mayor/menor)`);

console.log(mid);

const btnMayor = document.querySelector("#mayor");
const btnMenor = document.querySelector("#menor");
const btnEsteEs = document.querySelector("#esteEs");

btnMayor.addEventListener("click", function () {
  mid = Math.floor((left + right) / 2);
  adivinarNumero("mayor");
});

btnMenor.addEventListener("click", function () {
  mid = Math.floor((left + right) / 2);
  adivinarNumero("menor");
});

btnEsteEs.addEventListener("click", function () {
  document.getElementById("text").innerHTML = `Ya lo sabía :)`;
});

function adivinarNumero(respuesta) {
  if (respuesta === "mayor") {
    left = mid + 1;
    console.log("izquierda cambiada");
  } else if (respuesta === "menor") {
    right = mid - 1;
    console.log("derecha cambiada");
  }

  mid = Math.floor((left + right) / 2);

  if (left <= right) {
    document.getElementById(
      "text"
    ).innerHTML = `¿Tu número es ${mid}?`;
    console.log(`¿Tu número es mayor que ${mid}? (mayor/menor)`);
    console.log(mid);
  } else {
    console.log(`¡El número que pensaste es ${mid}!`);
  }
}
