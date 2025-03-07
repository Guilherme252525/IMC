function calcularIMC(){

    //entrada
let valorPeso = document.getElementById("peso").value;
let valorAltura = document.getElementById("altura").value;

//processamento
let IMC = valorPeso / (valorAltura * valorAltura);
console.log(IMC)

//saida
document.getElementById("resultado").textContent = "valor IMC: " + IMC.toFixed(2);

if (IMC < 18.5) {

    document.getElementById("classificacao").textContent = "Classificação: Magro"

  } else if (IMC < 24.9) {

    document.getElementById("classificacao").textContent = "Classificação: Normal"

 } else if (IMC < 29.9) {

    document.getElementById("classificacao").textContent = "Classificação: Sobrepeso"

 } else if (IMC < 34.9) {

    document.getElementById("classificacao").textContent = "Classificação: Obesidade Grau I"

 } else if (IMC < 39.9) {

    document.getElementById("classificacao").textContent = "Classificação: Obesidade Grau II"

 } else if (IMC > 40) {

    document.getElementById("classificacao").textContent = "Classificação: Obesidade Grau III"

 }

}

