// Comentar usa // ou /*

const nome =  "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

const aposentadoria = idade + contribuicao;

const homemaposentadoria = sexo == 'M' && contribuicao >= 35 && aposentadoria >= 95
const mulheraposentadoria = sexo == 'F' && contribuicao >= 30 && aposentadoria >= 85

if (homemaposentadoria || mulheraposentadoria){
  console.log('${nome}, voce pode se aposentar!')
    }
    else{
        console.log ('${nome}, voce ainda nao pode se aposentar!') 
    }

