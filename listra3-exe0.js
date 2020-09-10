chefe()

function chefe(){
    //declarar a matriz
    let matriz = [] // uma matriz é um vetor
    //vamos criar a matriz com 3 linhas
    matriz[0] = [] // cada linha da matriz é um vetor
    matriz[1] = [] // cada linha da matriz é um vetor
    matriz[2] = [] // cada linha da matriz é um vetor
    cadastra(matriz) // cadastra 3 alunos 
    consultaMediaNotas(matriz) // calcula a média das notas
}

function cadastra(mat){ //mat representa a matriz na função chefe
    for(let i = 0; i < 3; i++){ //são três alunos
       alert(`Informem 4 notas do aluno ${i+1}`)
        for(let j = 0; j < 4; j++){
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }  
}

function consultaMediaNotas(mat){
     let media = [0,0,0]
     for(let i = 0; i < 3; i++){ // para cada aluno 
         for(let j = 0; j < 4; j++){ //para cada nota 
            //soma no vetor
            media[i] = mat[i][j] + media[i]
         }
         //acabaram as notas do aluno i , então calculamos a media do aluno i
         media[i] = media[i] / 4 
     }
     //acabaram os alunos
    console.log(`Os valores das médias são ${media}`)   
}