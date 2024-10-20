// URL da API que retorna os pedidos
const apiUrl = 'http://localhost:8080/pedidocliente';

// Função para buscar dados da API e renderizar a lista de pedidos
async function carregarPedidos() {
    const token = localStorage.getItem('token');
        
    console.log('Token recuperado:', token);

    try {
        // Faz a requisição para a API
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // Usa o token no cabeçalho Authorization
              'Content-Type': 'application/json'
            }});

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao buscar os pedidos.", response);
        }

        // Converte a resposta para JSON
        const pedidos = await response.json();

        // Obtém a referência da lista no DOM
        const listaPedidos = document.getElementById('pedido-lista');

        // Limpa a lista antes de inserir novos dados
        listaPedidos.innerHTML = '';

        // Itera pelos pedidos e cria os elementos <li> para cada um
        pedidos.forEach(pedido => {
            const listItem = document.createElement('li');

            // Cria o conteúdo HTML para cada pedido
            listItem.innerHTML = `
                <strong>Pedido ID:</strong> ${pedido.id} <br>
                <strong>Data do Pedido:</strong> ${pedido.DtPedido} <br>
                <strong>Carro:</strong> ${pedido.carro.marca} ${pedido.carro.modelo} (${pedido.carro.ano}) <br>
                <strong>Preço do Carro:</strong> R$ ${pedido.precoCar.toLocaleString()} <br>
                <strong>Quantidade:</strong> ${pedido.quantidade} <br>
                <strong>Nome do Cliente:</strong> ${pedido.cliente.name} <br>
                <strong>Endereço:</strong> ${pedido.cliente.logradouro}, ${pedido.cliente.localidade} - ${pedido.cliente.uf} <br>
                <strong>Valor Total:</strong> ${pedido.valorTotal}<br>
                <strong>----------------------------------------------</strong><br>
            `;

            // Adiciona o item na lista
            listaPedidos.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
        alert('Ocorreu um erro ao carregar os pedidos.');
    }
}

// Chama a função para carregar os pedidos quando a página terminar de carregar
window.onload = carregarPedidos;