function chefe(){
    let vetor = [] 
    do {
         var escolha = Number(prompt(`Escolha uma das opções abaixo: \n [1] Cadastrar \n [2] Média de idade das pessoas c/ olhos castanhos e altura superior a 1.60m 
         \n [3] Maior Idade \n [4] Quantidade de Mulheres entre 20 e 45 anos ou que tenham olhos verdes e altura inferior a 1.70m 
         \n [5] Percentual dos Homens \n [6] Sair`))
         switch(escolha){
          case 1:cadastra(vetor)
                 break
          case 2:MediaIdade(vetor)
                 break
          case 3:MaiorIdade(vetor)
                 break
          case 4:QntdeMulheres(vetor)
                 break
          case 5:PercentualHomens(vetor)
                 break
          case 6:console.log(`Obrigado por utilizar nosso software!`)
                 break
          default:console.log(`Opção Inválida`)
         }  

    }
    while(escolha != 6)
}

function cadastra(vet){
    let habitantes = new Object()
    habitantes.sexo = prompt(`Informe o seu sexo: (Masculino/Feminino)`)
    habitantes.altura = Number(prompt(`Informe sua altura:`))
    habitantes.idade = Number(prompt(`Informe sua idade:`))
    habitantes.olhos = prompt(`Informe a cor dos olhos: ( A - Azul / V - Verde / C - Castanhos)`)
    vet.push(habitantes)
    
}
function MediaIdade(vet){ 
    let soma = 0 
    for(habitates of vet){
        soma = soma + habitantes.idade
    }
    console.log(`A média das idades informadas é ${soma/vet.length}`)
}

function MaiorIdade(vet){
    let MaiorIdade = vet[0].idade
    for(habitates of vet){
          if(habitantes.idade > MaiorIdade){
             MaiorIdade = habitantes.idade
          }
    }
    console.log(`A maior idade dentre as informadas é ${MaiorIdade}`)
}
function QntdeMulheres(vet){
    let Quantidade = 0
    for(habitantes of vet){
        if(habitantes.sexo == `Feminino`){
              
              if((habitantes.idade >= 20)&&(habitantes.idade<= 45)){
                Quantidade++
               }
              if((habitantes.olhos == `V`)&&(habitantes.altura < 1.70)){
                Quantidade++
              }

        }

    }
    console.log(`A quantidade de mulheres é ${Quantidade}`)
}
function PercentualHomens(vet){
    let qntdeH = 0
    for(habitantes of vet){
        if(habitantes.sexo == `Masculino`){
            qntdeH++
        }
    }
    console.log(`A porcentagem de homens é ${qntdeH/vet.length*100}`)
}
chefe()
