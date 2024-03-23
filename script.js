const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for (let i = 0; i < barbearia.cortes.length; i++){
        if (id == barbearia.cortes[i].id) {
            return barbearia.cortes[i];
        }
    }
    return "Corte não encontrado";
}

let resposta = buscaCortePorId(2);
console.log(resposta);


function buscaBarbaPorId(id) {
    for (let i = 0; i < barbearia.barbas.length; i++){
        if (id == barbearia.barbas[i].id) {
            return barbearia.barbas[i];
        }
    }
    return "Barba não encontrada";
}

let resposta2 = buscaBarbaPorId(2);
console.log(resposta2);

function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return "Estamos abertos";
    }
    return "Estamos fechados";
}

function retornaTodosCortes() {
    let cortes = [];
    for (let i = 0; i < barbearia.cortes.length; i++){
        cortes.push(barbearia.cortes[i]);
    }
    return cortes;
}

let resposta3 = retornaTodosCortes();
console.log(resposta3);

function retornaTodasBarbas() {
    let barbas = [];
    for (let i = 0; i < barbearia.barbas.length; i++){
        barbas.push(barbearia.barbas[i]);
    }
    return barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    }
    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    if (lista == 'cortes') {
        for (i = 0; i < barbearia.cortes.length; i++){
            if (id == barbearia.cortes[i].id) {
                barbearia.cortes[i].tipo = tipo;
                barbearia.cortes[i].valor = valor;
                return barbearia.cortes;
            }
        }
    }
    for (i = 0; i < barbearia.barbas.length; i++){
        if (id == barbearia.barbas[i].id) {
            barbearia.barbas[i].tipo = tipo;
            barbearia.barbas[i].valor = valor;
            return barbearia.barbas;
        }
    }

}

//let resposta4 = atualizarServico('cortes', 1, 100, 'luz');
//console.log(resposta4)

function calculaTotal(pedido) {
   let soma = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
   return soma;
}
  
  
