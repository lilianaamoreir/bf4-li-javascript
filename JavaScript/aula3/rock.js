//helper code
//numeor aleatorio entra 0 e 2
let randomNum = Math.floor(Math.random() * 3);
let guess = prompt ("Insere Rock, Paper or Scissors");

function getComputerMove(randomNum) {
    switch(randomNum){
        case 0:
          return console.log("Rock");
        case 1: 
           return console.log("Paper");
        case 2:
           return console.log("Scissors"); 
    }
}
console.log(randomNum)
let ale = getComputerMove(randomNum);

switch(elementos){
    case 0:
      console.log("Rock");
    case 1: 
        console.log("Paper");
    case 2:
        console.log("Scissors");
}
function palyRoun(elementos) {

    if(elementos === 0 && getComputerMove(1)){
        return console.log("Voce perdeu");

    }
} 
palyRoun(0)