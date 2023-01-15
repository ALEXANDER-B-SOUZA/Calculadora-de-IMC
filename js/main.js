/*Chamar função ao usuário clicar no botão calcular */
function calcular(){
    let nome =  document.getElementById("nome").value;    
    let altura =  document.getElementById("altura").value;
    let peso =  document.getElementById("peso").value;   
/* função para calcular IMC */
let alturacm = altura/100;
let IMC =  Math.round( peso / (alturacm * alturacm));
/*comparação para resultado*/
if(IMC <= 18.5){
 document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está abaixo do peso."
 } else if((IMC > 18.5) && (IMC <= 24.9)){
document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está com o peso normal."
 } else if((IMC > 25) && (IMC <= 29.9)){
document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está com excesso de peso."
 } else if ((IMC > 30) && (IMC <= 34.9)){
document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está com obesidade grau I"
 } else if((IMC > 35) && (IMC<= 39.9)){
document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está com obesidade grau II"
 } else if (IMC >= 40){
document.getElementById("resultado").innerHTML = nome+ ", seu IMC é: "+IMC +". Você está com obesidade grau III"
 }
}


