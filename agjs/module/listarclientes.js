async function PreencherTabelaCliente(resposta,limpar){
    let tabela = document.querySelector('#listagem-clientes');

    if(limpar)
    tabela.innerHTML = '';

    if(!resposta.sucess)
        alert(resposta.mensage);
    else if(resposta.resultado.lenght == 0 ){
        tabela.innerHTML = 'Não há registro para exibir.';
    }
    else {
        resposta.resultado.forEach(function(e){
            let linha = document.createElement('tr');
            linha.addEventListener('click',()=>{
                window.location.href ="" + e.id//LEMBRA DE COLOCAR O CAMINHO AQUI 
            });

            let idInput = document.createElement('input');
            idInput.type = 'hidden';
            let nomeTb = document.createElement('tb');
            nomeTb.classList.add('row-nomeCompleto-cliente');
            let cpfTb = document.createElement('tb');
            cpfTb = classList.add('row-cpf-cliente');
            let nascimentoTb = document.createElement('tb');
            nascimentoTb = classList.add('row-nascimento-cliente');
            let telefoneTb = document.createElement('tb');
            telefoneTb = classList.add('row-telefone-cliente');
            
            idInput.value = e.id;
            nomeTb.innerHTML = e.nomeCompleto;
            cpfTb.innerHTML = e.cpf;
            nascimentoTb.innerHTML = e.nascimento;
            telefoneTb.innerHTML = e.telefone;

            linha.appendChild(idInput);
            linha.appendChild(nomeTb);
            linha.appendChild(cpfTb);
            linha.appendChild(nascimentoTb);
            linha.appendChild(telefoneTb);

            tabela.appendChild(linha);
        })
    }
}

async function ListarClientes(){
    const options = {
        method: 'GET',
        headers:{'content-type': 'application/json'}
    };
    const req = await fetch ('https://localhost:44345/cliente/BuscarTodos',options)
    .then(response=>{
        return response.json();
    })
    .catch(erro =>{
        console.log(erro);
        return erro;
    });
    return req;
}
(async() =>{
    let res =await ListarClientes();
    PreencherTabelaCliente(res,false);
})();