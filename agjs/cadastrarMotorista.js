function converterParaDomElement(str){
    let parse = new DOMParse();
    let doc = parse.parseFromString(str,'text/html');
    return doc.body;
}

async function capturarDadosMotorista(){
    let nome = document.querySelector("#nome").value;
    console.log(nome);
    let cnh = document.querySelector("#cnh").value;
    console.log(cnh);
    let telefone = document.querySelector("telefone").value;
    console.log(telefone);

    let Motorista = {
        nome,
        cnh,
        telefone,
    };

    let SalvarMotoristaModel = {
        Motorista,
    };

    console.log(SalvarMotoristaModel);

    let response = await EnviarApi(SalvarMotoristaModel);
    console.log(response);
}

async function EnviarApi(viewmodel){
    const options = {
        method: 'POST',
        headers:{'content-type':'aplication/json'},

        body: JSON.stringify(viewmodel)
    };
    const req = await fetch('https://localhost:44345/motorista/salvar2', options)
    .then(response =>{
        response.text()
            .then(data =>{
                console.log(data);
                return data;
            });
    })
    .catch(erro =>{
        console.log(erro);
        return erro;
    });
    return req;
}

