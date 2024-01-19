/*Vamos entender Variáveis
Variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
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