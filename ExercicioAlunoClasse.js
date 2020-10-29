//Gustavo Ravanini Tupá Medeiros - 22974 - Engenharia de Software 

class Aluno {

       constructor(numeroAluno, nome, idade, p1, p2, media){
           this.numeroAluno = numeroAluno
           this.nome = nome
           this.idade = idade
           this.p1 = p1
           this.p2 = p2
           this.media = media
       }


    
       notaFinal= () => {
           this.media = (this.p1 + this.p2) / 2 
           return this.media
       }

       mostra = () => {
           console.log(`Número do aluno: ${this.numeroAluno} | Nome: ${this.nome} | Idade: ${this.idade} anos | NotaFinal: ${this.notaFinal()} | Status: ${this.passou()}`)
       }
    
       passou = () => {
           if(this.media >= 6){
               return "Aluno Aprovado!"
           }
           else{
               return "Aluno Reprovado!"
           }
       }
       

}

let aluno1 = new Aluno(22974, "Gustavo Medeiros", 23, 9 , 9.5 )
aluno1.mostra()
aluno1.passou()

let aluno2 = new Aluno(11    , "Osvaldinho", 18, 10, 10)
aluno2.mostra()
aluno2.passou()

let aluno3 = new Aluno(10    , "Menino Ney", 26, 4 , 3 )
aluno3.mostra()
aluno3.passou()

let n = Number(prompt('Informe o número do aluno:'))
let nom = prompt('Informe o nome do aluno:')
let id = Number(prompt('Informe a idade do aluno:'))
let n1 = Number(prompt('Informe a nota 1:'))
let n2 = Number(prompt('Informe a nota 2:'))

let aluno = new Aluno(n, nom, id, n1, n2)
aluno.mostra()
aluno.passou()
