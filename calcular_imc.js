// Comentar usa // ou /*

const nome =  'Carlos'
const peso = 114;
const altura = 1.88;


const imc = peso / (altura * altura);

let message = ""

if (imc >= 30){
    message = '${nome} Esta acima do peso com ${imc} de imc'

}
else{
    message = '${nome} Não esta acima do peso com ${imc} de imc'
}

console.log(message)


