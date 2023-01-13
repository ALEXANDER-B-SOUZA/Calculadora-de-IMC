/*Chamar função ao usuário digitar algum valor no campo */
function calcular(){
    let nome =  document.getElementById("nome").value;
    let idade =  document.getElementById("idade").value;
    let altura =  document.getElementById("altura").value;
    let peso =  document.getElementById("peso").value;
    let sexo =  document.getElementById("sexo").value;
/* função para calcular IMC */
let alturacm = altura/100;
let IMC =  peso / (alturacm * alturacm);
document.getElementById("resultado").innerHTML = nome+ "seu IMC é: "+IMC 
console.log(idade);
console.log(sexo);
}
