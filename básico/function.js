let ingrediente1 = 'Cenoura'
let ingrediente2 = 'Milho'

const nome = 'Leandro'

function fazerSucoFunction(ingrediente1, ingrediente2, leite) {
    console.log('Olá ' + nome + ' você escolheu um suco ' + (leite == true ? 'cremoso ' : '') + 'de ' + ingrediente1 + ' e ' + ingrediente2)
}

var fazerSucoArrayFunction = (ingrediente1, ingrediente2, leite) => {
    console.log(`Olá ${nome} você escolheu um suco${(leite == true ? ' cremoso' : '')} de ${ingrediente1} e ${ingrediente2}`)

}

fazerSucoFunction(ingrediente1, ingrediente2, true)
fazerSucoArrayFunction(ingrediente1, ingrediente2, true)