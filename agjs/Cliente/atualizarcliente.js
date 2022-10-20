async function getPessoaId(){
    const urlParams = new URLSearchParams(window.location.search);
    let res = await BuscarPorId(urlParams.get('id'));
    PreencherFormulario(res);
}

async function remover (){
    let id = document.querySelector("#id-cliente").value;

    const options = {
        method : 'DELETE',
        Headers :{'content-type':'aplication/json'}
    };
    const req = await fetch('https://localhost:44345/cliente/remover?nome='+nome, options)
    .then(response =>{
        return response.json();
    })
    .catch(erro =>{
        console.log(erro);
        return erro;
    });
    if(req.sucesso){
        alert(req.mensagem);
        voltar();
    }
    else {
        alert (req.mensagem);
    }
}
async function PreencherFormulario(json){

    let dadosForm = document.querySelector('#form');
    let id = dadosForm.querySelector('#id-cliente');
    let nome = dadosForm.querySelector('#nomeCompleto');
    let cpf = dadosForm.querySelector('#cpf');
    let nascimento = dadosForm.querySelector('#nascimento');
    let telefone= dadosForm.querySelector('#telefone');
    let rua = dadosForm.querySelector('#rua');
    let numero = dadosForm.querySelector('#numero');
    let bairro = dadosForm.querySelector('#bairro');
    let cidade = dadosForm.querySelector('#cidade');
    let complemento = dadosForm.querySelector('#complemento');

    id.value = json.resultado.id;
    nome.value = json.resultado.nome;
    cpf.value = json.resultado.cpf;
    nascimento.valueAsDate = convertToDate(json.resultado.nascimento);
    telefone.value = json.resultado.telefone;
    rua.value = json.resultado.rua;
    numero.value = json.resultado.numero;
    bairro.value = json.resultado.bairro;
    cidade.value = json.resultado.cidade;
    complemento.value = json.resultado.complemento;
}
async function EnviarApi(viewmodel){
    const options = {
        method:'PUT',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(viewmodel)
    };
    const req = await fetch('https://localhost:44345/cliente/atualizar',options)
    .then(response =>{
        response.text()
        .then(data =>{
            return data;
        });
    })
    .catch(erro =>{
        console.log(erro);
        return erro;
    });
    return req
}
async function Atualizar(){
    let id = parseInt(document.querySelector('#id-cliente').value);
    console.log(id);
    let nome = document.querySelector('#nome').value;
    console.log(nome);
    let cpf = document.querySelector('#cpf').value;
    console.log(cpf);
    let nascimento = document.querySelector('#nascimento').value;
    console.log(nascimento);
    let telefone = document.querySelector('#telefone').value;
    console.log(telefone);
    let rua = document.querySelector('#rua').value;
    console.log(rua);
    let numero = document.querySelector('#numero').value;
    console.log(numero);
    let bairro = document.querySelector('#bairro').value;
    console.log(bairro);
    let cidade = document.querySelector('#cidade').value;
    console.log(cidade);
    let complemento = document.querySelector('#complemento').value;

    let cliente = {
        id,
        nome,
        cpf,
        nascimento,
        telefone,
        rua,
        numero,
        bairro,
        cidade,
        complemento,
    };
    let atualizarClienteViewModel = {
        cliente
    };
    const options = {
        method: 'PUT',
        Headers: {'content-type':'aplication/json'},
        body: JSON.stringify(atualizarClienteViewModel)
    };
    const req = await fetch('https://localhost:44345/cliente/atualizar',options)
    .then (response =>{
        return response.json();

    })
    .catch(erro =>{
        console.log(erro);
        return erro;
    });
    if(req.sucesso){
        alert(req.mensagem);
        voltar();
    }
    else{
        alert(req.mensagem);
    }
}
function voltar(){
    window.location.href ='clientes/listarClientes.js';
}
function convertToDate(data){
    var pattern = /^(d{1,2})\/(\d{4})$/;
    var arrayDate =data.math(pattern);
    var dt = new Date(arrayDate[3], arrayDate[2]-1, arrayDate[1]);

}
getPessoaId();