// Mudando titulo 
let titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutricionista'
//---------------------------------------------------------------------------------------------------------------

//Seleciondando todos os pacientes da tabela e colocando dentro de uma lista 
let pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)

//percorrendo a lista de pacientes
for(var i = 0; 1 <= pacientes.length; i++){
    let paciente = pacientes[i]


    //Recebendo peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //Recebendo altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent
    
    
    let imcTd = paciente.querySelector('.info-imc')
    
    let imc = calculaimc(peso, altura)
    imcTd.textContent = imc


}

function calculaimc(peso, altura){
    let imc = 0
    //calculando peso imc do paciente
    imc = peso / (altura * altura)
    //topfixed para ajustar as casas decimais
    return imc.toFixed(2)
}




