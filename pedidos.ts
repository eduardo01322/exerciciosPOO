enum StatusPedido {
    AguardandoPreparo = "seu pedido está aguardando para preparo",
    EmPreparo = "seu pedido está em preparo",
    SaiuParaEntrega = "seu pedido saiu para entrega",
    Entregue = "seu pedido foi entregue",
}

class produtoPedido{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
}
}
class Pedido{
    //private produtos:{(nome: string, valor: number}[];
    private Produtos: produtoPedido[];
    private status: StatusPedido;

    constructor(){
        this.Produtos = [];
        this.status = StatusPedido.AguardandoPreparo
    }

    adicionarProduto(Produto: produtoPedido){
        this.Produtos.push(Produto);
        return "produto adicionado com sucesso";
    }

    atualizarStatus(status: StatusPedido){
        this.status = status;
    }

    exibirStatus(){
        return this.status
    }

    exibirProdutosDoPedido() {
        console.log("pedido");
        for(let i=0; i<this.Produtos.length; i++){
        console.log(this.Produtos[i].nome + " R$ " + this.Produtos[i].valor);
    }
    }
}

const pedido1 = new Pedido()
const pedido2 = new Pedido()
const produtoDoPedido1 = new produtoPedido("X-tudo", 15)
const produtoDoPedido2 = new produtoPedido("X-frango", 15)
pedido1.exibirStatus();
pedido1.adicionarProduto(produtoDoPedido1);
console.log(pedido1.adicionarProduto(produtoDoPedido1));
pedido1.exibirProdutosDoPedido();
console.log(pedido1.exibirStatus());
pedido1.atualizarStatus(StatusPedido.EmPreparo);
console.log(pedido1.exibirStatus());
console.log("");
pedido2.exibirStatus();
pedido2.adicionarProduto(produtoDoPedido2);
console.log(pedido2.adicionarProduto(produtoDoPedido2));
pedido2.exibirProdutosDoPedido();
console.log(pedido2.exibirStatus());
pedido2.atualizarStatus(StatusPedido.EmPreparo);
console.log(pedido2.exibirStatus());