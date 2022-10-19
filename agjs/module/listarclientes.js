async function PreencherTabelaCliente(resposta,limpar){
    let tabela = document.querySelector('#listagem-clientes');

    if(limpar)
    tabela.innerHTML = '';

    if(!resposta.sucesso)
        alert(resposta.mensage);
    else if(resposta.clientes.lenght == 0 ){
        tabela.innerHTML = 'Não há registro para exibir.';
    }
    else {
        resposta.clientes.forEach(function(e){
            let linha = document.createElement('tr');
            linha.addEventListener('click',()=>{
                window.location.href ="" + e.idCliente//LEMBRA DE COLOCAR O CAMINHO AQUI 
            });

            let idInput = document.createElement('input');
            idInput.type = 'hidden';
            let nomeTb = document.createElement('td');
            nomeTb.classList.add('row-nomeCompleto-cliente');
            let cpfTb = document.createElement('td');
            cpfTb.classList.add('row-cpf-cliente');
            let telefoneTb = document.createElement('td');
            telefoneTb.classList.add('row-telefone-cliente');
            
            idInput.value = e.id;
            nomeTb.innerHTML = e.nome;
            cpfTb.innerHTML = e.cpf;
            telefoneTb.innerHTML = e.telefone;

            linha.appendChild(idInput);
            linha.appendChild(nomeTb);
            linha.appendChild(cpfTb);
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