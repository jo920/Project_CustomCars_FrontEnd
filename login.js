function Login() {
  const login = {
    login: document.getElementById("login").value,
    senha: document.getElementById("senha").value  
  };

  const param = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(login)
  };

  fetch('http://localhost:8080/login', param)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }
      return response.text(); // Use text() para pegar a resposta como string
    })
    .then(token => {
      console.log('Login efetuado com sucesso!', token);
      // Armazene o token para uso futuro
       localStorage.setItem('token', token);
       window.location.href = 'home.html';
    })
    .catch(error => {
      console.error("Ocorreu um erro ao executar a rotina: " + error);
    });
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
    window.location.href = 'login.html';


  }}).catch(error => {
    console.error("Erro ao executar a rotina. Verifique: ", error);
  });

}