
const apiUrl = 'http://localhost:8080/dadospessoais';


async function carregarCliente() {
    const token = localStorage.getItem('token');
        
    console.log('Token recuperado:', token);

    try {

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // Usa o token no cabeçalho Authorization
              'Content-Type': 'application/json'
            }});

    
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados pessoais do cliente.", response);
        }

    
        const cliente = await response.json();

    
        const listacliente = document.getElementById('cliente-lista');


        listacliente.innerHTML = '';

        const listItem = document.createElement('p');
        listItem.innerHTML = `
            <strong>Cliente ID:</strong> ${cliente.id} <br>
            <strong>Nome completo:</strong> ${cliente.name} <br>
            <strong>CPF: </strong> ${cliente.cpf} <br>
            <strong>Data de Nascimento: </strong> ${cliente.dt_nasc} <br>
            <strong>Email:</strong> ${cliente.email} <br>
            <strong>Login do Cliente:</strong> ${cliente.login} <br>
            <strong>Endereço:</strong> ${cliente.logradouro}, ${cliente.localidade} - ${cliente.uf} <br>
        `;
        listacliente.appendChild(listItem);
        
    } catch (error) {
        console.error('Erro ao carregar dados pessoais:', error);
        alert('Ocorreu um erro ao carregar os dados.');
    }
}


window.onload = carregarCliente;