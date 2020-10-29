//Gustavo Ravanini Tupá Medeiros - 22974 - Engenharia de Software 

class produto {

    constructor(id, descricao, quantidade, preco){
        this.id = id
        this.descricao = descricao
        this.quantidade = quantidade
        this.preco = preco
    }


    comprar = (x) => {
        this.quantidade = this.quantidade + x 
    }

    vender = (x) => {
        if((this.quantidade - x) > 0) {
            this.quantidade - x
        } 
        else{
          console.log('Estoque Insuficiente') 
        }
    }

    aumentar = (x) => {
        this.preco = this.preco + x
    }

    diminuir = (x) => {
        if((this.preco - x) >= 0) {
            this.preco - x
        } 
        else{ 
            console.log('Preço não pode ser negativo!')
        } 
    
    }

    mostra = () => {
        console.log(`Id = ${this.id} | Descrição = ${this.descricao} | Quantidade = ${this.quantidade} | Preço = ${this.preco}`)
    }

}


let produto1 = new produto(102030, "Bota de couro", 20, 10)
produto1.comprar(5)
produto1.vender(10)
produto1.aumentar(50)
produto1.diminuir(70)
produto1.mostra()

let a = Number(prompt('Informe o id do produto:'))
let b = prompt('Descrição do produto:')
let c = Number(prompt('Informe a quantidade do produto:'))
let d = Number(prompt('Informe o preço do produto:'))

let produto2 = new produto(a, b, c, d)
produto2.comprar(20)
produto2.vender(5)
produto2.aumentar(100)
produto2.diminuir(100)
produto2.mostra()