function chefe(){
    let vendedores = []
    let vendas = []
    do {
         let escolha = Number(prompt(`Escolha uma das opções abaixo: \n [1] Cadastrar vendedor \n [2] Cadastrar Venda 
         \n [3] Finalizar o programa`))
         switch(escolha){
          case 1: cadastraVendedor(vendedores)
                  break
          case 2: cadastraVenda(vendas, vendedores)
                  break
          case 3: console.log(`Obrigado por utilizar nosso programa!`)
                  break
          default: console.log(`Opção Inválida`)
         }  

    }
    while(escolha != 3)
}

function cadastraVendedor(vet){ // vet representa o vetor dos vendedores
    let vendedor = new Object()
    vendedor.nome = prompt(`Informe o nome do vendedor:`)
    vendedor.codigo = Number(prompt(`Informe o código do vendedor:`))
    // verifica se o código ja existe
    for(let i = 0; i < vet.length; i++){
           if (vendedor.codigo == vet[i].codigo){
                console.log(`Cadastro cancelado pois esse código de vendedor já existe!`)
                return 0
             }
     }
    //insere no vet, mas na verdade insere nos vendedores
    vet.push(vendedor)
} 

function cadastraVendas(vdas,vdes){ //vdas representa o vetor vendas | vdes representa o vetor vendedores
    let venda = new Object()
    venda.codigo = Number(prompt(`Informe o código da venda:`))
    venda.vendedor = Number(prompt(`Informe o código do vendedor:`))
    venda.mes = Number(prompt(`Informe o mês de venda numericamente:`))
    venda.valor = Number(prompt(`Informe o valor da venda:`))
    //verifica se o vendedor existe
    //percorre o vetor vdes(vendedores)
    for (let i = 0; i < vdes.length; i++){
            if(venda.vendedor == vdes[i].codigo){
                // verifica se o mês ja foi registrado para este vendedor, pois se ja foi, não podemos registrar a venda
                for(let j = 0; j < vdas.length; j++){
                    if((venda.mes = vdas[i].mes)&&(venda.vendedor = vdas[i].vendedor)){
                        console.log(`Não podemos cadastrar a venda`)
                        return 0 // sai da função
                    }
                }
            }
        //ja percorreu e não achou, então vamos inserir
        // insere venda em vdas, que na verdade é vendas 
        vdas.push(venda) 
        console.log(`Venda Registrada`)  
        return 0 
    } 
   console.log(`Vendedor não existe`)
}

chefe()