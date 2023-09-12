class produto{
    nome: string;
    preço: number;

    constructor(nome: string, preço: number) {
        this.nome = nome;
        this.preço = preço;
    }
}
class carrinho{
    produtos: produto[] = [];

    constructor(){}

adicionarProduto(produtos: produto) {
    this.produtos.push(produtos);
}
listarEventos() {
    console.log("Meu carrinho");
    for(let i=0; i<this.produtos.length; i++){
    console.log(this.produtos[i].nome+"R$"+this.produtos[i].preço);
}
}
apagar(produtos:produto) {
    this.produtos= this.produtos.filter(item =>item.nome!= produtos.nome);
    return "Produto apagado"
}
}