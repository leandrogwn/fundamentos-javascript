let numbers = [1, 2, 3, 4]
let sexo = ["masculino", "feminino"]

//array de objeto
let pessoas = [
    { nome: 'Aluno 1' },
    { nome: 'Aluno 2' },
    { nome: 'Aluno 3' }
]

pessoas.push({ nome: 'Ricardo', sexo: sexo[0] })
pessoas.push({ idade: 10 })


console.log(numbers[0])
console.log(pessoas)

pessoas.forEach(el => {
    console.log(`Olá aluno ${el.nome}`)
})