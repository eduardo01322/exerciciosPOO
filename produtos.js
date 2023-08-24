"use strict";
class produtos {
    constructor(produto, preço) {
        this.produto = produto;
        this.preço = preço;
    }
    Produtos() {
        return "Produto: " + this.produto + "Preço: R$ " + this.preço;
    }
    descontos(desconto) {
        return "Desconto de " + desconto + "%. Novo preço R$" + (this.preço - this.preço * (desconto / 100));
    }
}
let produto1 = new produtos("nintendo", 2000);
let produto2 = new produtos("playstation", 1500);
let produto3 = new produtos("xbox", 2500);
console.log(produto1.Produtos());
console.log(produto1.descontos(0));
console.log(produto2.Produtos());
console.log(produto2.descontos(50));
console.log(produto3.Produtos());
console.log(produto2.descontos(100));
