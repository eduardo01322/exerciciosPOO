"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "seu pedido est\u00E1 aguardando para preparo";
    StatusPedido["EmPreparo"] = "seu pedido est\u00E1 em preparo";
    StatusPedido["SaiuParaEntrega"] = "seu pedido saiu para entrega";
    StatusPedido["Entregue"] = "seu pedido foi entregue";
})(StatusPedido || (StatusPedido = {}));
class produtoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.Produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(Produto) {
        this.Produtos.push(Produto);
        return "produto adicionado com sucesso";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("pedido");
        for (let i = 0; i < this.Produtos.length; i++) {
            console.log(this.Produtos[i].nome + " R$ " + this.Produtos[i].valor);
        }
    }
}
const pedido1 = new Pedido();
const pedido2 = new Pedido();
const produtoDoPedido1 = new produtoPedido("X-tudo", 15);
const produtoDoPedido2 = new produtoPedido("X-frango", 15);
pedido1.exibirStatus();
pedido1.adicionarProduto(produtoDoPedido1);
pedido1.exibirProdutosDoPedido();
console.log(pedido1.exibirStatus());
pedido1.atualizarStatus(StatusPedido.EmPreparo);
console.log(pedido1.exibirStatus());
console.log("");
pedido2.exibirStatus();
pedido2.adicionarProduto(produtoDoPedido2);
pedido2.exibirProdutosDoPedido();
console.log(pedido2.exibirStatus());
pedido2.atualizarStatus(StatusPedido.Entregue);
console.log(pedido2.exibirStatus());
