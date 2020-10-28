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
           console.log(`A média final é igual a ${this.media}`)
       }

       mostra = () => {
           console.log(`Número do aluno: ${this.numeroAluno} | Nome: ${this.nome} | Idade: ${this.idade} anos`)
       }
    
       passou = () => {
           if(this.media >= 6){
               console.log('Aluno Aprovado!')
           }
           else{
               console.log('Aluno Reprovado!')
           }
       }
       

}

let aluno1 = new Aluno(22974, "Gustavo Medeiros", 23, 9, 9.5, 0)
aluno1.mostra()
aluno1.notaFinal()
aluno1.passou()

let aluno2 = new Aluno(22555, "Osvaldinho", 18, 10, 10, 0)
aluno2.mostra()
aluno2.notaFinal()
aluno2.passou()

let aluno3 = new Aluno(21987, "Menino Ney", 26, 4, 3, 0)
aluno3.mostra()
aluno3.notaFinal()
aluno3.passou()