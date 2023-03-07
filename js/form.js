let BotaoAdicionar = document.querySelector('#adicionar-paciente')

BotaoAdicionar.addEventListener('click', function(evento){
    
    evento.preventDefault()
    
    let form = document.querySelector('#form-adiciona')

   
    let paciente = obterValoresDoForm(form)
    
    adicionarpacientenatabela (paciente)
})
function adicionarpacientenatabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montarTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))
    
    return pacienteTr
}

function montarTd(dado, classe){
    //criando uma td
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td

}

function obterValoresDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)
    }
    return paciente
}