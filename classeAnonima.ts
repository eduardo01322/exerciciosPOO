const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";

    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome: string; duracao: number}[] = [];
    adicionarExercicios(nome: string, duracao: number): void {
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
       // this.rotina.forEach(item => soma + soma + item.duracao);
        return soma;
    }
}

treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("flexoes", 15);
treinadorPessoal.adicionarExercicios("agachamento", 20);
console.log("tempo total necessário para a rotina: " + treinadorPessoal.calcularTempoTotal()+" minutos");