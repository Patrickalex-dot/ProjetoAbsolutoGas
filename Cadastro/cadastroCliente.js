async function cadastrar() 
{
    var nomeCompleto = document.querySelector("#nomeCompleto").value;
    var nascimento = document.querySelector("#nascimento").value;
    var cpf = document.querySelector("cpf").value;
    var referencia = document.querySelector("referencia").value;

    let pessoa = {
        nomeCompleto,
        cpf,
        nascimento,
        referencia,


    };
    let telefones = [];

    divtelefone.forEach(function(e) {
        let telefone = e.querySelector("#telefone");
        let ddd = e.querySelector("#ddd");
        let objetoTelefone ={
            telefone : telefone.value,
            ddd : ddd.value,
        };
        telefones.push(objetoTelefone);
        
    });
    let divEndereco = document.querySelector("#areaEndereco");
    
    if(!divEndereco){
        alert ("Enderço não preenchido");
        return;
    }
    let ruaInput = divEndereco.querySelector("#rua").value;
    console.log(ruaInput);
    let numeroInput = divEndereco.querySelector("#numero").value;
    console.log(numeroInput);
    let complementoInput = divEndereco.querySelector("#complemento").value;
    console.log(complementoInput);

    let endereco =
    {
        rua : ruaInput,
        numero : numeroInput,
        complemento : complementoInput,
    };


    

    let viewModel = 
    {
         pessoa,
         endereco,
         telefones,
    };

    console.log(viewModel);

    let response  = await EnviarApi(viewModel);
    console.log(response);

    
    
}