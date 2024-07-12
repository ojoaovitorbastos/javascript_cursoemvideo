let num = [5, 8, 2, 9, 3] //Vetor
num.push(1) //Adiciona um valor ao final do Vetor
//num.sort() //Deixa o Vetor em ordem crecente
console.log(num) //Mostra os valores do Vetor
console.log(`O vetor tem ${num.length} posições`) //Mostra quantas posições o Vetor tem
console.log(`O primeiro valor do vetor é ${num[0]}`) //Motra o 1? valor do Vetor


let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}