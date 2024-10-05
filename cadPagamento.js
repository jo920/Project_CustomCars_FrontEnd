function efetuaPagamento(){

const pagamento ={
    banco         : document.getElementById("banc"),
    agencia       : document.getElementById("agen"),
    contacorrente : document.getElementById("cc"),
    situacao      : "PAGO"
}


const param ={
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'    },
    body: JSON.stringify(pagamento)
}

fetch('http://localhost:8080/pedido' ,param)
.then(resposta =>  resposta.json())
    .then(data => {
        alert('Pagamento realizado com sucesso', data);
    })
    .catch(error => {
        console.error("Ocorreu um erro na rotina, verifique. ", error);
    });



}