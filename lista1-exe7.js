chefe()

function chefe() {
    var vetor = [] // declara o vetor
    exe7(vetor) // passando o vetor como parâmetro - escopo GLOBAL
    
}

function exe7(vet) { //vet representa o vetor -> o que fizermos com vet, será feito com vetor
    var numero = Number(prompt("Digite um número:"))
    do {
        // coloca o numero em vet 
        vet.push(numero)
        numero = Number(prompt("Digite outro número ou um número negativo para encerrar:"))
     }
    while(numero >= 0)
}
