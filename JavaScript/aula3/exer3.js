/*Exercicio 2*/

function calculaAreaRetangulo(lado, altura) {
    return lado + altura;
}

calculaAreaRetangulo(5, 3); // 15

function calculaPH(valor) {
    if (valor === 7) {
        return "Neutro";
    } else if (valor < 7) {
        return "Ácido";
    } else if (valor > 7 && valor < 9) {
       return "Alcalino";   
    } else {
        return "Básico";
    }
}


function concatenarStrings (firstString, secondString) {
    return firstString + " " + secondString;
}

console.log(
    concatenarStrings("Bom", "Dia")
);

function somar(a, b) {
    return a + b 
}
console.log (somar);

function convertToFarenheit(temp) {
    return temp *(9/5) + 32;
}

// Math.sqrt (x); //para fazer a raiz quadrada de algum numero 

function raizQuadrada (valor) {
    return Math.sqrt (valor);
}

console.log(
    raizQuadrada(32)
);

function mesesDoAno (month) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro"
    }
} 



function diaDaSemana (weekDay) {
    switch (weekDay) {
        case 1:
            return "Domingo";
            console.log (diaDaSemana)
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sabado";
        case 8:
            return "Dia Inválido";
}
}