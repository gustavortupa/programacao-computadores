chefe()
function chefue(){

    let matriz = []
    let vetor = []
    cadastra(matriz, vetor) 
    mediaDeCadaTime(matriz, vetor) 
    MediaDeCadaRodada(matriz) 

}
function cadastra(mat,vet){        
     for(let i = 0; i< 4; i++){
         let objeto = new Object()
         objeto.Nome = prompt(`Informe o nome do time:`)
         objeto.Cidade = prompt(`Informe o nome da cidade:`)
         objeto.Media = 0
         vet.push(objeto)
         mat[i] = []
         for(let j = 0; j < 3; j++){
            mat[i][j] = Number(prompt(`Informe a quantidade de pontos do time ${objeto.Nome} na rodada ${j+1}:`))
         }
     }   
}
function mediaDeCadaTime(mat,vet) {
    for(let i = 0; i<4; i++){
          for(let j = 0; j<3; j++){
             vet[i].Media = vet[i].Media + mat[i][j]
           }
          vet[i].media = vet[i].media / 3
    }
    console.log(vet)   
}
function MediaDeCadaRodada(mat){     
    for(let j = 0; j< 3; i++){
           let soma = 0
           for(let i =0; i < 4; i++){
               soma = soma + mat[i][j]
             }
           console.log(`A média da rodada ${j+1} é ${soma/4}`)
    }
}

