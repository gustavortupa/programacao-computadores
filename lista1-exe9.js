chefe()

function chefe() {
    var numero = Number(prompt("Digite um número inteiro e positivo:"))
    exe9(numero)
}

function exe9(num) {
    var divisores = 0
    for(var i = num; i > 0; i--){
          if(num % i == 0){
            divisores = divisores + i 
           }
    }
    console.log(`A soma dos divisores é ${divisores}`)
}