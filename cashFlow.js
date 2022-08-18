// Crie um objeto que possuirá 2 propriedades, ambos do tipo array receitas e despesas.

// Agora, crie uma função que irá calcular o total de receitas e despesas.

// Retorne uma mensagem com o seu saldo (ou seu saldo é negativo ou positivo).

const family = {
    incomes: [2000, 3000, 4000],
    expenses: [500, 700, 300.25, 180.80, 100.11 , 1000.35, 350, 10000.00]
}

function sum(familia, key){
    let total = 0;
    for(const value of familia[key]){
        total += value;
    }
    return total
}

function calculateBalance(){
    const calculateIncomes  = sum(family,"incomes");; 
    const calculateExpeses = sum(family, "expenses");
    const calculateFinal = calculateIncomes - calculateExpeses;

    if(calculateFinal >= 0) {
        const balanceText = 'positivo'
        return console.log(`Seu saldo é ${balanceText}: ${calculateFinal.toFixed(2)}`);
    }
    
    else if(calculateFinal < 0) {
        const balanceText = 'negativo'
        return console.log(`Seu saldo é ${balanceText}: ${calculateFinal.toFixed(2)}`);
    }
}

calculateBalance();



