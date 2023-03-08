// Mudando titulo 
let titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutricionista'
//---------------------------------------------------------------------------------------------------------------

//Seleciondando todos os pacientes da tabela e colocando dentro de uma lista 
let pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)

//percorrendo a lista de pacientes
for(var i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i]
    console.log(pacientes)


    //Recebendo peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //Recebendo altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent
    
    
    let imcTd = paciente.querySelector('.info-imc')
    
    let imc = calculaimc(peso, altura)
    imcTd.textContent = imc

    let pesoEhValido = validaPeso(peso)
    let alturaEhValido = validaAltura(altura)

    if(!pesoEhValido){
        console.log ('peso invalido')
        pesoEhValido = false
        imctd.textContent = 'Peso invalido'
        paciente.classList.add('paciente-invalido')
    }

    if(!alturaEhValido){
        console.log('Altura invalidado')
        alturaEhValido = false
        imcTd.textContent = 'Altura invalida'
        paciente.classList.add = ('paciente-invalido')
    }

    if(pesoEhValido && alturaEhValido){
        let imc = calculaimc(peso, altura)
        imctd.textContent = imc
    }


}

function calculaimc(peso, altura){
    let imc = 0
    //calculando peso imc do paciente
    imc = peso / (altura * altura)
    //topfixed para ajustar as casas decimais
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    } else{
        return false
    }
}
function validaAltura(altura){
    if(altura >= 0 && peso <= 3.00){
        return true
    } else{
        return false
    }
}



