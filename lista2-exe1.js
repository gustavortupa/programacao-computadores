function chefe(){
    let vendedores = []
    let vendas = []
    let escolha 
    do {
          escolha = Number(prompt(`Escolha uma das opções abaixo: \n [1] Cadastrar vendedor \n [2] Cadastrar Venda 
         \n [3] Consultar Vendas em determinado mês de um vendedor \n [4] Consultar o total de vendas de determinado vendedor
         \n [5] Mostrar o vendedor que mais vendeu em determinado mês \n [6] Mostrar o número do mês com mais vendas 
         \n [7] Finalizar o Programa `))
         switch(escolha){
          case 1: cadastraVendedor(vendedores)
                  break
          case 2: cadastraVenda(vendas, vendedores)
                  break
          case 3: consultaVendas(vendas)
                  break  
          case 4: consultaVendasTotal(vendas)  
                  break 
          case 5: maisVendeu(vendas)
                  break
          case 6: mesMaisVenda(vendas)
                  break
          case 7: console.log(`Obrigado por utilizar nosso programa!`)
                  break
          default: console.log(`Opção Inválida`)
         }  

    }
    while(escolha != 7)
}

function cadastraVendedor(vet){ // vet representa o vetor dos vendedores
    let vendedor = new Object()
    vendedor.nome = prompt(`Informe o nome do vendedor:`)
    vendedor.codigo = Number(prompt(`Informe o código do vendedor:`))
    // verifica se o código ja existe
    for(let i = 0; i < vet.length; i++){
           if (vendedor.codigo == vet[i].codigo){
                console.log(`Cadastro cancelado pois esse código de vendedor já existe!`)
                return
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
                        return // sai da função
                    }
                }
            }
        //ja percorreu e não achou, então vamos inserir
        // insere venda em vdas, que na verdade é vendas 
        vdas.push(venda) 
        console.log(`Venda Registrada`)  
        return 
    } 
   console.log(`Vendedor não existe`)
}

function consultaVendas(vdas) {
    let vendedor = Number(prompt(`Informe o código do vendedor:`))
    let mes = Number(prompt(`Informe o mês da venda numericamente:`))
    //percorre o vetor de vendas
    for(let i = 0; i < vdas.length; i++){
        if((vdas[i].vendedor == vendedor)&&(vdas[i].mes == mes)){ //encontrei a venda do vendedor naquele determinado mês
            console.log(`Valor da venda = ${vdas[i].valor}`)
            return // sai da função 
        }
    }
    console.log(`Não existe venda para este funcionário neste mês!`)
}

function consultaVendasTotal(vdas) {
    let vendedor = Number(prompt(`Informe o código do vendedor:`))
    let soma = 0
    //percorre o vetor de vendas
    for(let i = 0; i < vdas.length; i++){
        if(vdas[i].vendedor == vendedor){ //encontrei o vendedor
            soma = soma + vdas[i].valor //somo as vendas
        }
    }
    console.log(`Valor total das vendas do funcionário escolhido é ${soma}`)
}

function maisVendeu(vdas) {
    let mes = Number(prompt(`Informe o mês numericamente:`))
    let maiorVendedor = 0
    let maiorVenda = 0
    for(let i = 0; i < vdas.length; i++){
       if(vdas[i].mes == mes){
           if(vdas[i].venda > maiorVenda){
               maiorVenda = vdas[i].venda
               maiorVendedor = vdas[i].vendedor
           }
       } 
    }
    console.log(`O código do vendedor com mais vendas é ${maiorVendedor} e valor foi de ${maiorVenda}`)
}

function mesMaisVendas(vdas) {
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i < vdas.length; i++){
        let posicao = vdas[i].mes - 1 // descubro a posição para colocar
        meses[posicao] =  meses[posicao] + vdas[i].valor //acumula o valor
    } 
    //encontramos o maior valor vendido
    let maiorvalor = meses[0] 
    for(let i = 0; i < meses.length; i++){
      if(meses[i] > maiorvalor){
          maiorvalor = meses[i]
      }
    }
    //encontrar a posição do maior valor no vetor meses
    let posicao = meses.indexOf(maiorvalor)
    console.log(`O mês que mais vendeu ${posicao+1}`)
}

chefe()