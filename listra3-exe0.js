chefe()

function chefe(){
    //declarar a matriz de notas
    let matriz = [] // uma matriz é um vetor
    //vamos criar o vetor de alunos
    let vetor = []
    cadastra(matriz, vetor) // cadastra 3 alunos 
    consultaMediaNotas(matriz, vetor) // calcula a média das notas
    consultaMediaProvas(matriz)
    CalculaMaiorNotaProva(matriz,vetor)
}

//mat representa a matriz na função chefe
//vet representa o vetor na função chefe
function cadastra(mat, vet){ 
    for(let i = 0; i < 3; i++){ //são três alunos
        let objeto = new Object()
        objeto.Nome = prompt(`Informe o nome do aluno:`)
        objeto.Rg = prompt(`Informe o RG do aluno:`)
        objeto.Media = 0 // vamos considerar que no cadastro a média do aluno é 0
        //insere o objeto em vet
        vet.push(objeto)
        mat[i] = []
        alert(`Informe as 4 notas do aluno ${objeto.nome}`)
        for(let j = 0; j < 4; j++){ //são 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }  
}

function consultaMediaNotas(mat, vet){
     for(let i = 0; i < 3; i++){ // para cada aluno 
         for(let j = 0; j < 4; j++){ //para cada nota 
            //soma no vetor
            vet[i].media = vet[i].media + mat[i][j]
         }
         //acabaram as notas do aluno i , então calculamos a media do aluno i
         vet[i].media = vet[i].media / 4 
     }
     //acabaram os alunos
    console.log(vet)   
}

function consultaMediaProvas(mat) {
    for(let j = 0; j < 4; j++){
        let  soma = 0
        for(let i = 0; i < 3; i++){
            soma = soma + mat[i][j]
        }
        console.log(`A média da prova ${j+1} é ${soma/3}`)
    }
}

function CalculaMaiorNotaProva(mat,vet) {
     for(let j = 0; j < 4; j++){ //para cada prova
         let maiorNota = mat[0][j] //assumo que a maior nota é do primeiro aluno
         let maiorNome = vet[0].nome //assumo que o mair Nome é do primeiro aluno
         for(let i = 0; i<3; i++){
              if(mat[i][j]> maiorNota){
                  maoirNota = mat[i][j] //atualiza nota
                  maiorNome = vet[i].nome //atualiza nome
              }
         }
         console.log(`A prova ${j+1} tem a maior nota ${maiorNota} pertencente ao aluno ${maiorNome}`)
     } 
}