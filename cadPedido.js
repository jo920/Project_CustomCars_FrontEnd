function CadastrarPedido(){

    const pedido = {
    
        quantidade: document.getElementById("quanti").value,
        desconto : document.getElementById("desc").value,
        cliente : { id: + document.getElementById("cliente").value },
        carro : { id: document.getElementById("carro").value }
    }

    const init ={
        method : 'POST',
        headers: {
          'Content-Type': 'application/json' // Tipo de conteúdo JSON
        },
        body: JSON.stringify(pedido)
      }
    

    fetch('http://localhost:8080/pedido' ,init)
    .then(resposta =>  resposta.json())
    .then(data => {
        console.error('Pedido realizado com sucesso. Segue codigo do pedido '+ data.id + ' . Você será direcionada para a tela de pagamento.', data);
    })
    .catch(error => {
        console.error("Ocorreu um erro na rotina, verifique. ", error);
    });



}