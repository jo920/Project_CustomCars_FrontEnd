 function Cadastro(){

  const token = localStorage.getItem('token');
        
  console.log('Token recuperado:', token);


  const id = localStorage.getItem('car.id');

  console.log('ID RECUPERADO', id);

  const carro= {
img           : document.getElementById("img").value,
modelo        : document.getElementById("modelo").value,
marca         : document.getElementById("marca").value,
preco         : document.getElementById("preco").value,
ano           : document.getElementById("ano").value,
tipo          : document.getElementById("nac").value,
cambio
}

const init ={
  method : 'POST',
  headers: {
    
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' // Tipo de conteúdo JSON
  },
  body: JSON.stringify(carro)
}

fetch('http://localhost:8080/car', init)
.then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    alert('Cadastro realizado com sucesso', data);
  })
  .catch(error => {
    alert("Ocorreu um erro ao executar a rotina: " + error);
  });

}
