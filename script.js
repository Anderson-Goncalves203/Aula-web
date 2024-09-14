// alert('Olá,Mundo!')  Elemento de saida
// document.write('Olá, Mundo!') Elemento de saida
// conseole.log('Olá, Mundo!')
// prompt('Insira seu nome')
// let - variável de bloco
// var - variavel de escopo

// let $ = 2
// let _ = 2
// let soma = $ + _
// console.log(soma)

// var nome = prompt('Insira seu nome')
// nome="Anderson"
// let valor1 = parseInt(prompt('Insira valor1'))
// let valor2 = parseInt(prompt('Insira valor2'))
// let soma = valor1 + valor2
// console.log(nome,soma)

// let valor1 = parseInt(prompt('Insira valor1'))
// let valor2 = parseInt(prompt('Insira valor2'))
// maior=valor1 > valor2 
// console.log(maior)
// maior=valor1 =! valor2 
// console.log(maior)
// maior=valor1 === valor2 
// console.log(maior)

// let A = parseInt(prompt('Insira valor1'))
// let B = parseInt(prompt('Insira valor2'))

// let soma = A + B
// console.log(soma)
// let subtra = A - B
// console.log(subtra)
// let mult = A * B
// console.log(mult)
// let div = A / B
// console.log(div)

// AB = A === B
// console.log(AB)

// AB = A =! B
// console.log(AB)

const total= parseFloat(prompt('Insira quanto você tem'))

let carne =  parseFloat(prompt('Insira a quantidade de carne'))
let v1 = parseFloat(prompt('Insira o valor da carne'))
let totalCarne = carne * v1
let resultado = total- totalCarne
console.log(resultado)
// arroz
let arroz =  parseFloat(prompt('Insira a quantidade de arroz'))
let v2 = parseFloat(prompt('Insira o valor do arroz'))
let totalarroz = arroz * v2
let resultadoA = total- totalarroz
console.log(resultadoA)
// Feijão
let feijao =  parseFloat(prompt('Insira a quantidade de feijão'))
let v3 = parseFloat(prompt('Insira o valor do feijão'))
let totalfeijao = feijao * v3
let resultadoJ = total- totalfeijao
console.log(resultadoJ)
// Coca
let Coca =  parseFloat(prompt('Insira a quantidade de coca'))
let v4 = parseFloat(prompt('Insira o valor da coca'))
let totalCoca = carne * v4 * 6
let resultadoC = total- totalCoca
console.log(resultadoC)

res = resultado + resultadoA + resultadoJ + resultadoC
console.log(res)
Sobra = total < res
console.log(Sobra)

falta = total - res

console.log(falta)
















