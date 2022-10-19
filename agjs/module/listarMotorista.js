async function preencherTabelaMotorista(resposta,limpar){
    let tabela = document.querySelector("listagem-Motoristas");

    if(limpar)
    tabela.innerHTML='';

    if(!resposta.sucesso)
        alert(resposta.mensage);
    else if(resposta.motoristas.lenght == 0){
        tabela.innerHTML = "não há registro para exibir."
    }
    else{
        resposta.motoristas.forEach(function(e) {
            let linha = document.createElement('tr');
            linha.addEventListener('click',()=>{
                window.location.href=''+ e.idMotorista//LEMBRAR DE COLOCAR A REFERENCIA
            });
            
            let idInput = document.createElement('input');
            idInput.type = 'hidden';
            let nomeTb = document.createElement('tr');
            nometb = classList.add(row-nome-motorista);
            let cnhTb = document.createElement('tr');
            cnhTb = classList.add(row-cnh-motorista);
            let telefoneTb = document.createElement('tr');
            telefoneTb = classList.add(row-telefone-motorista);

            idInput.value = e.id;
            nomeTb.value = e.nome;
            cnhTb.value = e.cnh;
            telefoneTb.value = e.telefone;

            linha.appendChild(idInput);
            linha.appendChild(nomeTb);
            linha.appendChild(cnhTb);
            linha.appendChild(telefoneTb);

            tabela.appendChild(linha);
            
        })
    }
}

async function ListarMotorista(){
    const options = {
        method: 'GET',
        headers:{'content-type':'application/json'}
    };
    const req = await fetch ('https://localhost:44345/motorista/BuscarTodos',options)
    .then(response=>{
        return response.json();
    })
    .catch(erro=>{
        console.log(erro);
        return erro;
    });
    return req;
}
(async()=>{
    let res = await ListarMotorista();
    preencherTabelaMotorista(res,false);
})();