//Variáveis
let nomeHeroi = ("DanteTrickster");
let nivelHeroi;
let saldoVitorias;
let vitoria = 95;
let derrota = 4;

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = God Of War

function calculadoraNivel(){
    saldoVitorias = vitoria - derrota
    return saldoVitorias
};

function nivelAtual() {
    if(saldoVitorias <= 10){
        console.log("Ferro")
    } else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        console.log("Bronze")
    } else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        console.log("Prata")
    } else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        console.log("Ouro")
    } else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        console.log("Diamante")
    } else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        console.log("Lendário")
    } else {
        console.log("God Of War")        
    }
    return nivelHeroi
};



console.log("O herói " + nomeHeroi + " tem saldo de " + calculadoraNivel() + " vitórias e está no nível " + nivelAtual());