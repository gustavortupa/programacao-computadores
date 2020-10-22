//Gustavo Ravanini Tupá Medeiros - 22974 - 2 Semestre de Eng. de Software

//ES1, ES2, ES3, ES4
function soma(x,y) {
    console.log(x+y)
}
soma(2,8)

//ES5
let soma = function(x,y) {
    console.log(x+y)
}
soma(2,8)

//-----------------------------------------------------------------------------------------------------

//EcmaScript6 (2015)

//Arrow Function - Funções com seta
//Antes da seta temos os parâmetros da função (x,y)
//Depois da seta temos a implementação da função (console.log(x+y))
//Ausência da palavra 'function'
//função anônima - funçao sem nome

let soma = (x,y) => console.log(x+y)
soma(2,8)


//find -> retorna só a primeira ocorrência
//findIndex -> Acha a posição da primeira ocorrência
//filter -> retorna todos que sustentam a condição

let vet = [2, 4, 7, 9, 11]
console.log(vet.find((elemento => elemento > 5)))
console.log(vet.filter((elemento => elemento > 5)))


//Exercício Exemplo

var cadastra = (vet) => {
     vet.push(
         {
             codigo: Number(prompt(`Informe codigo`)),
             aro: Number(prompt(`Informe aro`)),
             modelo: prompt(`Informe modelo`),
             marca: prompt(`Informe marca`),
             valor: Number(prompt(`Informe valor`)),
             ano: Number(prompt(`Informe ano de fabricação`))
         }
     )
     console.log(`Bike ${vet[vet.length-1].codigo} inserida com sucesso `)
     }


var codigo
var busca = (vet) => {
         codigo = Number(prompt(`Informe o código:`))
         let bike = vet.find((el) => {
                      return el.codigo == codigo 
                    }) 
         console.log(bike)
     }

var soma = (vet) => {
    let resultado = vet.reduce((total, el) => {total + el.valor}, 0) 
     console.log(`A soma dos valores é ${resultado}`)
    }

var marca
var buscaMarca = (vet) => {
        marca = prompt(`Informe a marca:`)
        console.log(vet.filter((el) => {marca = el.marca}))
    }

var soma3 = (vet) => {
     console.log(vet.map((el)=> {
         el.aro = el.aro + 3 
         el
         }))
    }

var maisvelha = (vet) => {
   let maisVelha = vet[0].ano, Velha = vet[0];
   vet.forEach((el) => {
          if(el.ano < maisVelha) {
             maisVelha = el.ano
             Velha = el
             }  
      })
    console.log(Velha)
} 

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)
soma3(vetor)
maisvelha(vetor)