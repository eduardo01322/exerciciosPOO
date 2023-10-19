class ProdutoLoja{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}

class CarrinhoDeCompra{
    ProdutosDoCarrinho: ProdutoLoja[] = [];
    
    constructor(){}

    adicionarAoCarrinho(produto: ProdutoLoja){
        this.ProdutosDoCarrinho.push(produto);
    }

    excluirDoCarrinho(Produto: ProdutoLoja){
        this.ProdutosDoCarrinho = this.ProdutosDoCarrinho.filter(item => item.nome !== Produto.nome);
    }

    calcularValorTotal(){
        let soma = 0;
        for (let i = 0; i < this.ProdutosDoCarrinho.length; i++) {
            soma = soma + this.ProdutosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }

    exibirProdutos(){
        console.log("Produtos do carrinho:");
        for (let i = 0; i < this.ProdutosDoCarrinho.length; i++) {
            console.log("produto:" + this.ProdutosDoCarrinho[i].nome
            + "R$ " + this.ProdutosDoCarrinho[i].preco.toFixed(2));
        }
    }
}

class Loja{
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompra = new CarrinhoDeCompra();

    constructor(){}

    adicionarAoEstoque(produto:  ProdutoLoja){
        this.produtosDoEstoque.push(produto);
    }

    removerDoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }

    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome);
        if (produtoEncontrado){
            this.carrinhoDeCompra.adicionarAoCarrinho(produtoEncontrado);
            return "Produto adicionado ao carrinho"
        }
        else{
            return "Produto não encontrado no estoque";
        }
    }

    removerProdutoDoCarrinho(produto: ProdutoLoja){
        this.carrinhoDeCompra.excluirDoCarrinho(produto)
    }

    exibirProdutoDoCarrinho(){
        console.log ("Produtos do carrinho:");  
        this.carrinhoDeCompra.exibirProdutos}
}

//criando produtos
const produtoLoja1 = new ProdutoLoja("Camiseta",29.99);
const produtoLoja2 = new ProdutoLoja("Calça", 49.99);
const produtoLoja3 = new ProdutoLoja("Sapato", 79.90);
const produtoLoja4 = new ProdutoLoja("Meia", 20.00);

//criando a loja
const minhaLoja = new Loja();

//adicionando ao estoque
minhaLoja.adicionarAoEstoque(produtoLoja1);
minhaLoja.adicionarAoEstoque(produtoLoja2);
minhaLoja.adicionarAoEstoque(produtoLoja3);
minhaLoja.adicionarAoEstoque(produtoLoja4);

//adicionando ao carrinho
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);

//removendo do carrinho
minhaLoja.removerProdutoDoCarrinho(produtoLoja4);

//remover do estoque
minhaLoja.removerDoEstoque(produtoLoja4);

//exibindo produtos do carrinho
minhaLoja.carrinhoDeCompra.exibirProdutos();

//valor total do carrinho
console.log("Total do carrinhpo de compras: R$ "
+ minhaLoja.carrinhoDeCompra.calcularValorTotal());