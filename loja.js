"use strict";
class produto {
    constructor(nome, preço) {
        this.nome = nome;
        this.preço = preço;
    }
}
class carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produtos) {
        this.produtos.push(produtos);
    }
    listarEventos() {
        console.log("Meu carrinho");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + "R$" + this.produtos[i].preço);
        }
    }
    apagar(produtos) {
        this.produtos = this.produtos.filter(item => item.nome != produtos.nome);
        return "Produto apagado";
    }
}
