class funcionarios{

    nome: string;
    cargo: string;
    salario: number;
    inss: number = 11;
    ir: number = 7.5;

    constructor (nome: string, cargo: string, salario: number, inss: number, ir: number){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
}

aumento(aumento: number){
    this.salario = this.salario * aumento/100 + this.salario
    return this.nome + " você recebeu um aumento de: " + aumento + "% seu novo salário é de: R$ "+ this.salario
}

taxas(){
    this.inss = this.salario * (this.inss/100)
    this.ir = (this.salario - this.inss) * (this.ir/100)
    return "Funcionário: " + this.nome + "cargo: " + this.cargo + " Salário Bruto: R$ " + this.salario + ", Impostos a serem pagos: R$ " + this.inss  + " de INSS e " 
    + this.ir + " de Imposto de renda, " + " Salário Liquido R$ " + (this.salario - (this.inss + this.ir))

}
}

let funcionario1 = new funcionarios ("Ana Silva", "Analista de Vendas", 3000, 11, 7.5);
let funcionario2 = new funcionarios ("Torss", "clonador de cartão", 1000, 11, 7.5);

console.log(funcionario1.aumento(10));
console.log(funcionario1.taxas());

console.log(funcionario2.aumento(10));
console.log(funcionario2.taxas());
