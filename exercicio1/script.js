let queroComerMais = prompt ("Deseja comer mais coxinhas? \nS para sim \nN para não")
let conta = 0
while (queroComerMais === "S"){
    queroComerMais = prompt ("Deseja comer mais coxinhas? \nS para sim \nN para não")
    conta = conta +  2.50
    }
console.log(`O valor total da sua conta é de R$${conta}`)
