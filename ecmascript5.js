//EcmaScript é uma especificação 
//Exemplos de JS em especificação ES5 
// vamos aprender
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()
//Array.every()
//Array.some()
//Array.indexOf()
//JSON.parse()
//JSON.stringify()
// Date.now() -> já aprendemos

// -------------------------------------------------------------------------------------------------

chefe()

var conteudo = ""

function chefe(){
    
    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]
    
    //vetor.forEach(mostra)

    vetor.forEach(acumula)

    //funcao(10 , 0)
    //funcao(30 , 1)
    //funcao(50 , 2)
    //funcao(70 , 3)
    //funcao(90 , 4)

    //percorrer o vetor 
    // for(let i = 0; i < vetor.length; i++){
    //    console.log(`O elemento ${vetor[i]} está na posição ${i}`)
    // }

}

//agora nós podemos percorrer o vetor sem utilizar o elemento "for"
//os parâmetros são o elemento e sua posição
function mostra(elemento, posicao) {
    //mostrando só os elementos nas posições pares
    if(posicao % 2 == 0){
    console.log(`O elemento ${elemento} está em posição par`)
    }
    else{
        console.log(`O elemento ${elemento} está na posição ímpar`)
    }

}

//o parâmetro é somente o elemento
function acumula(elemento) {

    conteudo = conteudo + " - " + elemento

}

// -------------------------------------------------------------------------------------------------

//função Map (UTILIZAMOS O RETURN) - Mapeia um vetor para outro vetor (também faz um for no vetor)

var idades = [10, 13, 17, 18, 20, 22, 26]

var novo = idades.map(multiplica) //estamos fazendo um for no vetor 

//multiplica(10)
//multiplica(13)
//multiplica(17)
//multiplica(18)
//multiplica(20)
//multiplica(22)
//multiplica(26)

console.log(novo)

function multiplica(elemnto){
    return elemnto * 2  //todos os elementos serão multiplicados por 2 
}

var exemplo = [10, 11, 17, 18, 19, 20 , 21, 29, 27]

var retorno = exemplo.map(imparPar)

function imparPar(elemento){
     if(elemento % 2 == 0){
         return 0
     }
     else{
         return 1 
     }
    
}

console.log(retorno)

// -------------------------------------------------------------------------------------------------

// podemos criar variáveis do tipo função

//a variável x é uma função
var x = function teste () {
     console.log(`Variável do tipo de uma função`)
}

x()

//a variável soma é uma função
var soma = function soma(a,b) {
    console.log(a + b)
    
}
soma(3,6)

//a variável subtracao é uma função
var subtracao = function subtracao (a,b) {
    console.log(a - b)   
}

subtracao(6,1)

// -------------------------------------------------------------------------------------------------


//Próxima aula = Filter, Reduce , Some 

