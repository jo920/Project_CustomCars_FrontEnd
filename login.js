function Login(){

var cpf     = document.getElementById("cpf").value;
var senha  = document.getElementById("senha").value;


if (cpf != null || senha != null){

    fetch('http://localhost:8080/login/' + cpf + '/' + senha)
    .then(response => {
      if (!response.ok) {
        // Se a resposta não for bem-sucedida (código de status não está entre 200 e 299)  
        throw new Error(alert( "Falha no Login, verifique o usuário e senha digitados. Status: "+ response.status));

      }else{
          
          alert("Login efetuado com sucesso!");
          window.open("C:/Users/joaoh/OneDrive/%C3%81rea%20de%20Trabalho/API_CAR/home.html");

      }
    }).catch(error => {
      // Manipule os erros da requisição
      console.error('Erro ao executar a rotina. Verifique: ', error);
    });

} else {

    alert("CPF e Senha não podem está nulos. Preencha-os!");
}
  
}

//função está em manutenção 
function ForgotPassword(){

const newPaswword= {
  login : document.getElementById("login").value,
  senha : document.getElementById("senha").value
}

const url = 'http://localhost:8080/alterasenha'; 

const param ={
  method : 'PUT',
  headers: {
    'Content-Type': 'application/json'    },
  body: JSON.stringify(newPaswword)
}

fetch(url,param)
.then(resposta =>  {
  if (!response.ok) {
      throw new Error(console.error("Ocorreu uma falha ao validar o CPF informado" + response.error));

  }else {

    alert("Senha alterada com sucesso. Voce sera direcionado para a tela de login");
    window.open("C:/Users/joaoh/OneDrive/%C3%81rea%20de%20Trabalho/API_CAR/Login/login.html");


  }}).catch(error => {
    console.error("Erro ao executar a rotina. Verifique: ", error);
  });

}