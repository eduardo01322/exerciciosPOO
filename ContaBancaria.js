"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria2 {
    constructor() {
        super("qwer", 100, "qwert");
        this.limiteChequeEspecial = 1000;
    }
    Depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log("Você depositou R$ " + valor + " seu dinheiro foi depositado com suscesso. Seu saldo atual é de R$" + this.saldo);
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
        let pegar = " você sacou R$ " + valor + " com sucesso, seu saldo atual é de R$ " + this.saldo;
        if (valor > this.limiteChequeEspecial)
            (valor > this.saldo);
        {
            pegar = " Você não tem saldo o sufuciente. Seu saldo atual é de R$ " + (this.saldo + valor);
        }
        console.log(this.titular + pegar);
    }
    consultarSaldo() {
        console.log("seu aldo atual é de " + this.saldo);
        return this.saldo;
    }
}
class ContaPoupanca extends ContaBancaria2 {
    constructor() {
        super("qwer", 100, "qwert");
    }
    Depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log("Você depositou R$ " + valor + " seu dinheiro foi depositado com suscesso. Seu saldo atual é de R$" + this.saldo);
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
        let pegar = " você sacou R$ " + valor + " com sucesso, seu saldo atual é de R$ " + this.saldo;
        if (valor > this.saldo) {
            pegar = " Você não tem saldo o sufuciente. Seu saldo atual é de R$ " + (this.saldo + valor);
        }
        console.log(this.titular + pegar);
    }
    consultarSaldo() {
        console.log("seu aldo atual é de " + this.saldo);
        return this.saldo;
    }
    calcularRendimentoAnual(taxa) {
        this.saldo = taxa * this.saldo;
        console.log("Seu rendimento Anul foi de R$" + this.saldo);
        return this.saldo;
    }
}
class ContaInvestimento extends ContaBancaria2 {
    constructor() {
        super("qwer", 100, "qwert");
    }
    Depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log("Você depositou R$ " + valor + " seu dinheiro foi depositado com suscesso. Seu saldo atual é de R$" + this.saldo);
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
        let pegar = " você sacou R$ " + valor + " com sucesso, seu saldo atual é de R$ " + this.saldo;
        if (valor > this.saldo) {
            pegar = " Você não tem saldo o sufuciente. Seu saldo atual é de R$ " + (this.saldo + valor);
        }
        console.log(this.titular + pegar);
    }
    consultarSaldo() {
        console.log("seu aldo atual é de " + this.saldo);
        return this.saldo;
    }
    investir(valor, prazoMeses, Juros) {
        this.saldo = valor * (1 + Juros) * prazoMeses;
        console.log("Olá" + this.titular + " da conta de numero" + this.numeroConta + " seu investimento de " + valor + " deu resultados, agora você tem R$" + this.saldo);
    }
}
const qqq = new ContaCorrente();
qqq.Depositar(100);
qqq.sacar(2000);
qqq.consultarSaldo();
const rrr = new ContaPoupanca();
rrr.Depositar(100);
rrr.sacar(2000);
rrr.consultarSaldo();
rrr.calcularRendimentoAnual(0.2);
const uuu = new ContaInvestimento();
uuu.Depositar(100);
uuu.sacar(2000);
uuu.consultarSaldo();
uuu.investir(100, 12, 0.2);
