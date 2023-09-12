"use strict";
class produtoLoja {
    constructor(nome, preço) {
        this.nome = nome;
        this.preço = preço;
    }
}
class carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    listarCarrinho() {
        console.log("Meu carrinho");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + " R$ " + this.produtos[i].preço);
        }
    }
    apagar(produto) {
        this.produtos = this.produtos.filter(item => item.nome != produto.nome);
        return "Produto apagado";
    }
    preço() {
        let soma = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            soma = soma + this.produtos[i].preço;
        }
        console.log("Sua compra é de R$ " + (soma.toFixed(2)));
    }
}
class loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new carrinho();
    }
    adicionarEstoque(estoque) {
        this.estoque.push(estoque);
    }
    listarEstoque() {
        console.log("estoque");
        for (let i = 0; i < this.estoque.length; i++) {
            console.log(this.estoque[i].nome + " R$ " + this.estoque[i].preço);
        }
    }
    apagarEstoque(estoque) {
        this.estoque = this.estoque.filter(item => item.nome != estoque.nome);
        return "produto removido do estoque";
    }
    adicionarNoCarrinho(produto) {
        const produtoEncontrado = this.estoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerDoCarrinho(produto) {
        this.carrinho.apagar(produto);
        return "Produto apagado";
    }
    lista() {
        this.carrinho.listarCarrinho();
    }
    custo() {
        this.carrinho.preço();
    }
}
const objeto1 = new produtoLoja("picanha", 13.00);
const objeto2 = new produtoLoja("bolsa", 22.00);
const objeto3 = new produtoLoja("torta", 17.00);
const objeto4 = new produtoLoja("calça", 50.00);
const meucarrinho = new carrinho();
meucarrinho.adicionarProduto(objeto1);
meucarrinho.adicionarProduto(objeto2);
meucarrinho.adicionarProduto(objeto3);
console.log(meucarrinho.listarCarrinho());
console.log(meucarrinho.preço());
console.log(meucarrinho.apagar(objeto2));
console.log(meucarrinho.listarCarrinho());
console.log(meucarrinho.preço());
console.log("");
const estoque = new loja();
estoque.adicionarEstoque(objeto1);
estoque.adicionarEstoque(objeto2);
estoque.adicionarEstoque(objeto3);
estoque.adicionarEstoque(objeto4);
console.log(estoque.listarEstoque());
console.log(estoque.apagarEstoque(objeto2));
console.log(estoque.listarEstoque());
console.log(estoque.adicionarNoCarrinho(objeto4));
console.log(estoque.adicionarNoCarrinho(objeto1));
console.log(estoque.removerDoCarrinho(objeto3));
console.log(estoque.lista());
console.log(estoque.custo());
