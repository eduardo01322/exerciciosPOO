"use strict";
class funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    gerentes() {
        console.log("senhor " + this.nome);
    }
    desenvolvidor() {
        console.log("senhor  " + this.nome);
    }
}
class gerente extends funcionario {
    constructor() {
        super("ttt", 1000);
    }
    calcularSalarioMensal() {
        let bonus = this.salario;
        this.salario = bonus * 0.10 + bonus;
        console.log("seu salario como gerente é de R$ " + this.salario);
        return bonus;
    }
}
class Desenvolvidor extends funcionario {
    constructor() {
        super("eee", 1000);
    }
    calcularSalarioMensal() {
        let soma = this.salario;
        console.log("seu salario como desenvolvidor é de R$ " + this.salario);
        return soma;
    }
}
const ttt = new gerente();
ttt.gerentes();
ttt.calcularSalarioMensal();
const eee = new Desenvolvidor();
eee.desenvolvidor();
eee.calcularSalarioMensal();
