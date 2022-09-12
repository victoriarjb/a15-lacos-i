const membrosDaFamilia = ["Otávio", "Giulia", "Victória", "Guilherme", "Marisa"]
let ranking = 0
for (let i=0; i<membrosDaFamilia.length; i++){
    ranking = ranking+1
    console.log (`
    ${ranking} - ${membrosDaFamilia[i]}
    `)
}