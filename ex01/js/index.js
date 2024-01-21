/*Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritm[eticas e muito mais.

São os sinais que usamos: + - * / = ++ += -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/

//Declaração de variáveis
var nome, sobrenome, nomeCompleto, idade;

//Atribuição dos valores
nome = "Girlando";
sobrenome = "Marinho";
idade = 18;
nomeCompleto = nome+" "+sobrenome;

pessoa = idade+nome;

document.getElementById("texto").innerHTML=pessoa;