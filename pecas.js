// Variaveis são um espaço na memória para guardar algum valor
let pesoPeca = 100

// pesoPeca - Camel Case
// peso_peca - Snake case
// PesoPeca - Pascal Case 


if (pesoPeca > 100) { 
    console.log ("peso maior que 100g, logo podemos cadastrar a peça")
} else {
    console.log ("peso insuficiente, não é possível cadastrar")
}

let numeroPecas = 8

if (numeroPecas >= 10){
    console.log ("número maior que 10, não posso cadastrar")
}else {
    console.log ("Número menor que 10, ainda há espaço na caixa")

}


let nomePeca = "Disco de Freio"

console.log ("O comprimento do nome da peça é:", nomePeca.length)

if (nomePeca.length < 3){
    console.log ('Nome de peça muito curto, não é possível cadastrar')
} else{
    console.log("Nome de peça adequado, podemos cadastrar")
}