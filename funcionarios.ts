abstract class funcionario{
    private nome: string;
    protected salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;

    gerentes(): void{
        console.log("senhor " + this.nome)
    }

    desenvolvidor(): void{
        console.log("senhor  " + this.nome)
    }
}

class gerente extends funcionario{
    constructor(){
        super("ttt", 1000);
    }

    calcularSalarioMensal(): number{
        let bonus = this.salario;
        this.salario= bonus * 0.10 + bonus;
        console.log("seu salario como gerente é de R$ "+this.salario);
        return bonus;
    }
}

class Desenvolvidor extends funcionario{
    constructor(){
        super("eee", 1000)
    }
calcularSalarioMensal(): number {
    let soma = this.salario;
        console.log("seu salario como desenvolvidor é de R$ "+this.salario);
        return soma;}
}

const ttt = new gerente();
ttt.gerentes();
ttt.calcularSalarioMensal();

const eee = new Desenvolvidor();
eee.desenvolvidor();
eee.calcularSalarioMensal();