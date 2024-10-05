function FoundCar(){

    var CarId = document.getElementById("car").value;


    if(car != null || car != " "){

        fetch('http://localhost:8080/car/' + CarId)
        .then(resposta => {return resposta.json()
        }).then(body => {document.getElementById("id").value=body.id
                        document.getElementById("modelo").value=body.modelo
                        document.getElementById("marca").value=body.marca
                        document.getElementById("preco").value=body.preco
                        document.getElementById("ano").value=body.ano
                }) 

    }            

}