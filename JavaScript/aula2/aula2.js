/* 
se o mumeor for maior que 0-> positivo
se o numero for menor que 0 -> negativo
*/

let number1 = 0;


if (number1 === 0) {
    console.log("o numoer é zero")
} else if (number1 > 0) {
    console.log("o numero é positivo");
} else {
    console.log("o numero é negativo");
} 

/* else noa tem condiçao entao tudo o que nao for o anterior vai para o else; pode dar erros*/   
/* as chavetas v\ao representar a entrada de um bloco: se nao for o positivo passamos a frente e entramos no seguinte bloco*/

let number2 = "1.5"; /* é uma string*/

if (typeof(number2) === "string") {
console.log("invalido");
}


/* vai devolver uma string, que não é u +m numero */


/* Ex.1: Maior ou menor de idade */

let age = 18;

if (age >= 18) {
    console.log ("é maior de idade");
} else {
    console.log ("é menor de idade");
}

//
/* Ex.2 Par ou Impar */
/* se number % 2 === 0 é par, senao é impar*/
//

let number = 40

if (number % 2 === 0) {
    console.log ("par");
} else {
    console.log ("impar");
}

//
/*Ex.3 */
/*calcular a media*/
//

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
    console.log ("Ambos ganham os troféu.");
} else if (scoreDolphins > scoreKoalas) {
    console.log ("Os Dolphins ganham o troféu.");
} else {
    console.log ("Os Koalas ganham o troféu.");
}

//
/* Ex.4 
escreve um cof+digo que atribua notas ao s alunos de acordo com as suas pontuaçoes
*/
//

let grade = 92;

if (grade >= 90 && grade <=100) {
    console.log ("A");
} else if (grade >= 70 && grade <=89) {
    console.log ("B");
} else if (grade >= 60 && grade <= 69) {
    console.log ("C");
} else if (grade >= 50 && grade <= 59) {
    console.log ("D");
} else {
    console.log ("F");
}



//Switch//

let operation = "-";

switch (operation) {
case "+":
    console.log("Add numbers");
    break;

case "-":
    console.log("Subtract numbers");
    break;

case "*":
    console.log("Multiply numbers");
    break;

case "/":
    console.log("Divide numbers");
    break;
}

//
/*Ex.1
retorna o mes do ano
*/
//

let mes = 7

switch (mes) {
case 1:
    console.log ("Janeiro");
    break;
case 2:
    console.log ("Fevereiro");
    break;
case 3:
    console.log ("Março");
    break;
case 4:
    console.log ("Abril");
    break;
case 5:
    console.log ("Maio");
    break;
case 6:
    console.log ("Junho");
    break;
case 7:
    console.log ("Julho");
    break;
case 8:
    console.log ("Agosto");
    break;
case 9:
    console.log ("Setembro");
    break;
case 10:
    console.log ("Outubro");
    break;
case 11:
    console.log ("Novembro");
    break;
case 12:
    console.log ("Dezembro");
    break;
    default: 
    console.log ("Invalid input");
}


//
/*Ex.2
retorna o nome do dia da semana*/
//

let diaDaSemana = 4

switch (diaDaSemana) {
case 2:
    console.log ("Segunda-Feira");
    break;
case 3:
        console.log ("Terça-Feira");
        break;
case 4:
    console.log ("Quarta-Feira");
    break;
case 5:
    console.log ("Quinta-Feira");
    break;
case 6:
    console.log ("Sexta-Feira");
    break;
case 7:
    console.log ("Sábado");
    break;
case 1:
    console.log ("Domingo");
    break; 
}


//While loop//

let i = 0;

while (i < 10) {
    console.log (i);
    i++;
}

let e = 10;

while (e > 0) {
    console.log (e);
    e--;
}
console.log ("Lift-Off")

//For loop
/* em termos de escrita escrevemos tudo ma mesma linha*/
// 


for (let i = 0; i < 10; i++) {
    console.log (i);
}


/*
TODO:
Roll a random number between 1 and 10
Ask the user for a number
while the guess is different from the random number
  keep asking the user for a new number
  if the guess us the same as the random number - victory
*/


let randNumb = Math.floor(Math.random() * 10) + 1; // 1 - 10
let guess = prompt("Insere um numero de 1 a 10");

parseInt(guess)

while (randNumb !== guess) {
    console.log ("try again");
} 