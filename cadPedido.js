 document.addEventListener("DOMContentLoaded", function() {
    // Função para pegar o parâmetro 'id' da URL
    function getCarIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id'); // Retorna o valor do parâmetro 'id'
    }

    async function fetchClientData() {
        const apiUrl = 'http://localhost:8080/dadospessoais';
        const token = localStorage.getItem('token');
        
        console.log('Token recuperado:', token);

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Usa o token no cabeçalho Authorization
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar dados do cliente.');
            }

            const data = await response.json();
            const clienteIdInput = document.getElementById('client-id-input');
            if (clienteIdInput) {
                clienteIdInput.value = data.id;
            }
        } catch (error) {
            console.error('Erro ao executar a rotina:', error);
        }
    }

    // Pegar o ID do carro da URL
    const carId = getCarIdFromUrl();

    if (carId) {
        // Preencher o campo de ID do carro automaticamente
        const carIdInput = document.getElementById('car-id-input');
        if (carIdInput) {
            carIdInput.value = carId;
        } else {
            console.error("Campo de ID do carro não encontrado.");
        }
    } else {
        console.error("Nenhum ID de carro foi fornecido.");
    }

    // Chamar a função para buscar os dados do cliente
    fetchClientData();
}); 

function CadastrarPedido(){

    const token = localStorage.getItem('token');
        
    console.log('Token recuperado:', token); 

      
    const pedido = {
    
        quantidade: document.getElementById("quanti").value,
        desconto : document.getElementById("desc").value,
        cliente : { id: + document.getElementById("client-id-input").value },
        carro : { id: document.getElementById("car-id-input").value }
    }

    const init ={
        method : 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // Tipo de conteúdo JSON
        },
        body: JSON.stringify(pedido)
      }
    

      fetch('http://localhost:8080/pedido', init)
      .then(resposta => {
          if (!resposta.ok) {
              throw new Error('Erro ao realizar o pedido');
          }
          return resposta.json();
      })
      .then(data => {
          alert('Pedido realizado com sucesso.'+'Segue id do Pedido: '+ data.id +' . Você será direcionado para a tela de pagamento.');
          window.location.href = 'cadPagamento.html';
      })
      .catch(error => {
          alert("Ocorreu um erro na rotina, verifique: " + error.message);
      });



}