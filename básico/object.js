let pessoa = {}

pessoa.nome = "aluno"
pessoa.sobrenome = "udemy"
pessoa.idade = 10
pessoa.endereco = {
    rua: "minha rua",
    numero: 140,
    cidade: 'Sao paulo',
    estado: 'SP'
}

console.log('Pessoa é um: ', typeof (pessoa))
console.log('Pessoa.nome é um: ', typeof (pessoa.nome))
console.log(pessoa)