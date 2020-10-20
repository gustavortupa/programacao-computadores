function chefe() {
    let bicicletas = [];
    let opcao 
    do{
        opcao = Number(prompt(`\n 1 - Adicionar \n 2 - Buscar \n 3 - Soma Total \n 4 - Marca  \n 5 - Soma 3 unidades no Aro \n 6 - Mais Velha \n 7 - Sair do programa`))
         switch (opcao) {
             case 1:adicionar(bicicletas)
                break
             case 2:buscar(bicicletas)
                break
             case 3:somaValor(bicicletas)  
                break
             case 4:marca(bicicletas)
                break
             case 5:aro(bicicletas)
                break
             case 6:maisvelha(bicicletas) 
                break
             case 7: console.log('Fim do programa')
                break    
             default:console.log('Opção inválida!')
                break
         } 
    } while(opcao != 7)
}

function adicionar(bicicletas) {
    let codigo = Number(prompt('Digite o código da bicicleta:'));
    while(bicicletas.some(function (elemento){return elemento.codigo==codigo})){
        alert('Código ja cadastrado!')
        codigo = Number(prompt('Digite outro código da bicicleta:'));
    }
    bicicletas.push({
     codigo,
     aro:Number(prompt('Informe o aro da bicicleta:')),
     modelo:prompt('Informe o modelo da bicicleta:'),
     marca:prompt('Informe a marca da bicicleta:'),
     valor:Number(prompt('Informe o valor da bicicleta:')),
     ano:prompt('Ano:'),
    }) 
    console.log(`Bike ${codigo} registrada com sucesso!`)  

}

function buscar(bicicletas) {
    let codigo = Number(prompt('Digite o código da bicicleta:'));
    while(!bicicletas.some(function (elemento){return elemento.codigo==codigo})){  //! -> INVERTE O VALOR LÓGICO
        alert(`Código não ${codigo} cadastrado!`)
        codigo = Number(prompt('Digite outro código da bicicleta:'));

    }
    console.log(bicicletas.filter(function (elemento) {
        if(codigo == elemento.codigo){
           return elemento 
        }
        
    }))
    
}

function somaValor(bicicletas) {
    let valorTotal = bicicletas.reduce(function (total, elemento){
        return total + elemento.valor
    },0)
    console.log(`O valor total das bicicletas é ${valorTotal}`)   
}

function marca(bicicletas) {
     let marca = prompt('Digite a marca:')
     bicicletas.forEach(function(elemento){
       if(marca == elemento.marca){
        console.log(elemento)
       }
     })

}

function aro(bicicletas) {
     console.log(bicicletas.forEach(function (elemento, posicao) {
        elemento[posicao].aro += 3 
    }))
}

function maisvelha(bicicletas) {
    let maisVelha = bicicletas[0].ano, Velha = bicicletas[0];
    bicicletas.forEach(function (elemento) {
        if(elemento.ano < maisVelha){
        maisVelha = elemento.ano
        Velha = elemento
        }  
    })
    console.log(Velha)
}

chefe()
// == iguala sem comparar a tipagem
// === (iguala a tipagem (número com número/ caracter com caracter))





