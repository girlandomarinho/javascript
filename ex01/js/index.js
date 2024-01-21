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

 == compara se o valor das variáveis posicionadas antes e depois do símbolo, são iguais, ele compara se são iguais, não os tipos.

 === Ele retorna mais com mais perfeição, pois ele irá comparar também os tipos
*/

var idade, eleitor;
idade = 17;
eleitor = (idade<18)? "Menor de idade": "Maior de idade";
alert('A resposta é: '+ eleitor);