document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById('card-container');

    // Função para formatar o preço como moeda
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        }).format(value);
    }

    // Função para criar e adicionar os cards dinamicamente
    function createCard(car) {
        console.log("Criando card para o carro:", car); // Log para verificar o carro retornado

        // Verificar se car.img é válido (não "null" e não vazio)
        const imageUrl = car.img && car.img.trim !== 'null' ? car.img : 'https://via.placeholder.com/300x200.png?text=No+Image+Available';
        console.log("URL da imagem:", imageUrl); // Log para verificar a URL de imagem usada
    
        // Criar o elemento div do card
        const card = document.createElement('div');
        card.classList.add('card');
    
        // Criar o elemento img
        const img = document.createElement('img');
        img.src = imageUrl; // Usa imagem padrão se não houver
        img.alt = car.modelo;
    
        // Criar o título do card
        const title = document.createElement('h2');
        title.textContent = car.modelo;
    
        // Criar a descrição do card com o preço formatado
        const description = document.createElement('p');
        description.textContent = `Preço: ${formatCurrency(car.preco)}`;
    
        // Adicionar os elementos ao card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
    
        // Tornar o card clicável, redirecionando para cadPedido.html com o ID do carro
        card.addEventListener('click', function() {
            window.location.href = `cadPedido.html?id=${car.id}`; // Passa o ID do carro na URL
        });

        // Adicionar o card ao container
        cardContainer.appendChild(card);
    }

    // Função para buscar todos os carros da API
    function fetchAllCars() {
        const token = localStorage.getItem('token');
        
        console.log('Token recuperado:', token);
        
        fetch('http://localhost:8080/car', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // Usa o token no cabeçalho Authorization
              'Content-Type': 'application/json'
            }})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados: ' + response.statusText);
                }
                return response.json();
            })
            .then(cars => {
                // Criar um card para cada carro retornado
                cars.forEach(createCard);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos carros:', error);
            });
    }

    // Buscar todos os carros quando a página carregar
    fetchAllCars();
});