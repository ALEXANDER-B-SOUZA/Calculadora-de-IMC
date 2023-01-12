/*Chamar função ao usuário digitar algum valor no campo */
function calcular(){
    let nome =  document.getElementById("nome").value;
    let idade =  document.getElementById("idade").value;
    let altura =  document.getElementById("altura").value;
    let peso =  document.getElementById("peso").value;
    let sexo =  document.getElementById("sexo").value;
/* função para calcular IMC */

let resultado =  peso / (altura * altura);
console.log(resultado);
}
