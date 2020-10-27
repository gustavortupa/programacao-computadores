//Vamos programar orientado a objetos

//Criando uma classe chamada veículo
class Veiculo {
      
    //método construtor - com parâmetros
    constructor(marca, modelo, cor, ano, motor, velocidade){
        this.marca = marca  //"this" representa o objeto sendo criado
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
        this.motor = motor //true (ligado) ou false (desligado) 
        this.velocidade = velocidade
    }
    mostra = () => {
        let status = (this.motor) ? "Ligado   ": "Desligado"
         console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Cor: ${this.cor} | Ano: ${this.ano} | Motor: ${status} | Velocidade: ${this.velocidade}`) 
         // this representa o objeto que chama o método
    }
    //Ligar o carro
    ligar = () => {this.motor = true}
    //Desligar o carro
    desligar = () => {this.motor = false}
    //Aumentar velocidade em X (20) 
    aumentar = () => { 
        let x = Number(prompt('Escolha o valor de x para aumentar na velocidade:'))
        this.velocidade = this.velocidade + x
    }
    //Diminuir velocidade em X(20)
    diminuir = () => {
        let x = Number(prompt('Escolha o valor de x para diminuir na velocidade:'))
        this.velocidade = this.velocidade - x
    }

}

//cria um objeto da classe Veículo
let objeto1 = new Veiculo("GM  ", "Onyx  ", "Azul ", 2015, false, 100)  //this representa objeto1
objeto1.ligar()
objeto1.aumentar()
objeto1.mostra() 


//cria outro objeto da classe Veículo
let objeto2 = new Veiculo("Fiat", "Palio ", "Preto", 2016, false, 100)  //this representa objeto2
objeto2.ligar()
objeto2.aumentar()
objeto2.mostra()

//Exemplo criado pelo aluno
let objeto3 = new Veiculo("Ford", "Fusion", "Prata", 2020, true, 100)
objeto3.desligar()
objeto3.diminuir()
objeto3.mostra()