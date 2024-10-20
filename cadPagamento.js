/* document.addEventListener("DOMContentLoaded", function() {

    function getPedidoIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('pedido.id'); 
    }

    // Pegar o ID do pedido da URL
    const pedidoid = getPedidoIdFromUrl();

    console.log("Pedido ID:", pedidoid); // Verificar o valor do ID

    if (pedidoid) {
        // Preencher o campo de ID do pedido automaticamente
        const PedidoIdInput = document.getElementById('pedido-id-input');
        if (PedidoIdInput) {
            PedidoIdInput.value = pedidoid;
        } else {
            console.error("Campo de ID do pedido não encontrado.");
        }
    } else {
        console.error("Nenhum ID de pedido foi fornecido.");
    }

});
 */

function efetuaPagamento() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert("Token não encontrado!");
        return;
    }

    const pagamento = {
        banco: document.getElementById("banc").value,
        agencia: document.getElementById("agen").value,
        contacorrente: document.getElementById("cc").value,
        pedido: { id: +document.getElementById("pedido").value },
        situacao: "PAGO"
    };

    // Verificação dos campos (opcional, mas recomendado)
    for (const [key, value] of Object.entries(pagamento)) {
        if (key !== 'pedido' && !value) {
            alert(`O campo ${key} deve ser preenchido.`);
            return;
        }
    }

    const param = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // Tipo de conteúdo JSON
        },
        body: JSON.stringify(pagamento)
    };

    fetch('http://localhost:8080/pagamento', param)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Erro ao realizar o pedido: ' + resposta.statusText);
            }
            return resposta.json();
        })
        .then(data => {
            alert('Pagamento realizado com sucesso: ' + JSON.stringify(data));
        })
        .catch(error => {
            alert("Ocorreu um erro na rotina, verifique: " + error.message);
        });
}