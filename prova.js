//Questão 2 
chefe()
function chefe() {
      var vetor = []
      var metriz = []
      let opcao
      do{
         opcao = Number(prompt(`1. Cadastra \n 2. Calcula Média \n 3. Calcula Modelo \n 4. Finalizar`))
         switch(opcao){
              case 1: cadastrar(vetor, matriz)
                      break
              case 2: calculaMedia(vetor, matriz)
                      break
              case 3: calculaModelo()
                      break
              case 4: console.log(`Obrigado por utilizar nosso programa!`)
              default: console.log(`Opção inválida`) 
         }
          
      }
     while(opcao != 4)    
}
function cadastrar(vet,mat) {
    for(var i = 0; i < 4; i++){
        var carro = new Object()
        carro.marca = prompt(`Informe a marca do carro:`)
        carro.modelo = prompt(`Informe o modelo do carro:`)
        carro.ano = Number(prompt(`Informe o ano do carro:`))
        carro.valor = Number(prompt(`Informe o valor do carro:`))
        carro.media = 0 
        //insere no vetor
        vet.push(carro)
        for(let j = 0; j < 5; j++){
            mat[i][j] = Number(prompt(`Informe o valor da nota da avaliação ${j+1}:`))
        }
    }
}

function calculaMedia(vet,mat) {
        for(let i=0;i<4;i++){
           for(let j=0;j<5;j++){
                vet[i].media = vet[i].media + mat[i][j]
            }
            vet[i].media = vet[i].media / 5
            console.log(vet[i])
        }
 }      

 function calculaModelo(vet,mat) {
     for(let j = 0; j < 5; j++){
         var menor = mat[0][j]
         var modelo = vet[0].modelo
         for(let i = 0; i< 4; i++){
            if(mat[i][j] < menor){
                menor = mat[i][j]
                modelo = vet[i].modelo
            }  
         }
         console.log(`A menor nota na avaliação ${j+1} vale ${menor} e o modelo do carro é ${modelo}`)
     }   
 }

 //Questão 3 
boss()
function boss() {
      var pessoa = []
      var imovel = []
      let opcao
      do{
         opcao = Number(prompt(`1. Cadastra Pessoa \n 2. Cadastra Imóvel \n 3.  \n 4. Finalizar`))
         switch(opcao){
              case 1: cadastraPessoa(pessoa, imovel)
                      break
              case 2: cadastraImovel(pessoa, imovel)
                      break
              case 3: calculaTotal(imovel,pessoa)
                      break
              case 4 : maiscaro(imovel,pessoa)
                      break
              case 5: console.log(`Obrigado por utilizar nosso programa!`)
              default: console.log(`Opção inválida`) 
         }
          
      }
     while(opcao != 5)    
}

 function cadastraPessoa(pes){
    var objeto = new Object()
    objeto.rg = prompt(`RG`)
    objeto.cpf = prompt(`CPF`)
    objeto.nome = prompt(`Nome`)
    // insere no vetor
    pes.push(objeto)
}
function cadastraImovel(pes, imv){
    var objeto = new Object()
    objeto.codigo = prompt(`Codigo`)
    objeto.endereco = prompt(`Endereco`)
    objeto.tamanho = prompt(`Tamanho`)
    objeto.tipo = prompt(`Tipo`)
    objeto.valor =  prompt(`Valor`)
    objeto.rg = prompt(`Rg`)
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == objeto.rg){
            imv.push(objeto)
            return 0 // sai do for e da função
        }
    }  
}
function calculaTotal(imv, pes){
    let rg = prompt(`Informe RG`)
    let soma = 0
    for(let i=0;i<imv.length;i++){
        if (imv[i].rg == rg){
            soma = soma + imv[i].valor
        }
    }
    let nome
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == rg){
            nome = pes[i].nome
            break
        }
    }
    console.log(`A soma total é ${soma} da pessoa com o nome ${nome}`)
} 

function maiscaro(imv,pes) {
    let MaisCaro = imv[0].valorcpf 
    let rg = imv[0].rg
    for(let i = 0; i < imv.lenght; i++){
        if(imv[i].valor > MaisCaro){
            MaisCaro = imv[i].valor
            rg = imv[i].rg
        }
    }
    let cpf 
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == rg){
            cpf = pes[i].cpf
            break
        }
    }
    console.log(`O valor do imóvel mais caro é ${MaisCaro} e o CPF da pessoa que possui esse imóvel é ${cpf}`)
}