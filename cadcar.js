
 function Cadastro(){

  const carro= {

modelo        : document.getElementById("modelo").value,
marca         : document.getElementById("marca").value,
preco         : document.getElementById("preco").value,
ano           : document.getElementById("ano").value
//tipo          : document.querySelector('input[name="OPCAO1"]:checked')
//moedaCompra   : document.querySelector('input[name="OPCAO2"]:checked')
}

const init ={
  method : 'POST',
  headers: {
    'Content-Type': 'application/json' // Tipo de conteúdo JSON
  },
  body: JSON.stringify(carro)
}

fetch('http://localhost:8080/car', init)
.then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    console.log('Cadastrado com sucesso: ', data);
  })
  .catch(error => {
    alert("Ocorreu um erro ao executar a rotina: " + error);
  });

}
