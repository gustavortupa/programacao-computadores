
// -------------------------------------------------------------------------------------------------

//Função forEach() 
var numeros = [2, 4, 6, 7, 8]
numeros.forEach(exe1) //substitui o for - itera o vetor
//exe1(2, 0)
//exe1(4, 1)
//exe1(6, 2)
//exe1(8, 3)
numeros.forEach(exe2)

function exe1(elemento, posicao){ //podemos passar como paramêtro o elemento e a posição ou apenas um deles
      //vamos mostrar apenas os elementos pares nas posições pares
      if((elemento % 2 == 0)&&(posicao % 2 == 0)){
          console.log(elemento)
      }
    
}

function exe2(elemento){ //pasando somento o elemento como parâmetro
    if(elemento % 2 == 1){
        console.log(elemento)
    }
}

// -------------------------------------------------------------------------------------------------

//Função Map -- Percorre o vetor e cria um novo (utiliza-se o return)

var numeros =[4, 6, 9, 13, 18]

var novo = numeros.map(exe3)

function exe3(elemento){
    return elemento + 10  
}

console.log(novo) // 14, 16, 19, 23, 28

//exemplo que cairá na prova
var novo2 = numeros.map(exe4)

function exe4(elemento) {
    if(elemento % 2 == 0){
        return elemento 
    }
    
}
console.log(novo2) // 4, 6, undefined, undefined, 18 

//MAP NÃO ALTERA O TAMANHO DO VETOR RESULTANTE

// -------------------------------------------------------------------------------------------------

//Função filter 

var eleitos = [4, 6, 7, 9, 12, 13]
var novos = eleitos.filter(exe5)

function exe5(elemento) {
    return elemento < 10   
}

console.log(novos)

//FILTER ALTERA O TAMANHO DO VETOR ORIGINAL, PODENDO REDUZÍ-LO NUM VETOR RESULTANTE

// -------------------------------------------------------------------------------------------------

//Função Reduce -> Reduz um vetor a um único valor

var idades = [7, 8, 9, 10, 11, 12, 13, 14]

var soma = idades.reduce(exe6)

//exe6 (7,8) -> 15
//exe6 (15, 9) -> 24
//exe6 (24, 10) -> 34
//exe6 (34, 11) -> 45
//exe6 (45, 12) -> 57
//exe6 (57, 13) -> 70
//exe6 (70, 14) -> 84

function exe6(total, elemento) {
      return total + elemento
    
}

console.log(soma)

var diferenca = idades.reduce(exe7)
//exe7 (7,8) -> -1
//exe7 (-1, 9) -> -10
//exe7 (-10, 10) -> -20
//exe7 (-20, 11) -> -31
//exe7 (-31, 12) -> -43
//exe7 (-43, 13) -> -56
//exe7 (-56, 14) -> -70

function exe7(total, elemento) {
    return total - elemento
    
}
console.log(diferenca)

//Encontrando o maior valor com o reduce

var notas =[4, 6, 8, 9, 1]
var maior = notas.reduce(exe9)
function exe9(resultado, elemento) {
   //operador ternário
   return (resultado > elemento) ? resultado:elemento
    // if(resultado > elemento){
    //    return resultado
    //}
    // else{
    //   return elemento
    //}   
}
console.log(maior)

// -------------------------------------------------------------------------------------------------

//Função Some -> Se existir algum valor no vetor que atende a condição (Valores bolleanos | True / False)

var nomes = ['Pedro', 'Lucas', 'Carlos']

var resultado = nomes.some(exe8)

function exe8(elemento) {
      return elemento == 'Lucas'
    
}

console.log(resultado)

// -------------------------------------------------------------------------------------------------

//Próxima Aula -> parse() stringify() classes