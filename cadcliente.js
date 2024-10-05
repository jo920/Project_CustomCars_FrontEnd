 function CadCliente(){

    const cliente = {

        name      : document.getElementById("name").value,
        cpf       : document.getElementById("cpf").value,
        dt_nasc   : document.getElementById("dt_nasc").value,
        email     : document.getElementById("email").value,
        senha     : document.getElementById("senha").value,
        cep       : document.getElementById("cep").value    
    }

const param ={

    method : 'POST',
    headers: {
      'Content-Type': 'application/json' // Tipo de conteúdo JSON
    },
    body: JSON.stringify(cliente)
}




fetch('http://localhost:8080/cliente' ,param)
.then(resposta =>  resposta.json())
.then(data => {
    console.log('Cadastrado com sucesso: ', data);
    window.open("C:/Users/joaoh/OneDrive/%C3%81rea%20de%20Trabalho/API_CAR/Login/login.html");
  })
  .catch(error => {
    console.error("Ocorreu um erro na rotina, verifique. ", error);
  });
     






 }