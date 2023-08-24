"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    minhaconta() {
        return this.titular + ", o saldo atual da 'minhaconta' é de R$ " + this.saldo;
    }
    deposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Você depositou R$ " + deposito + "seu dinheiro foi depositado com suscesso. Seu saldo atual é de R$" + this.saldo;
    }
    saque(saque) {
        this.saldo = this.saldo - saque;
        let pegar = " você sacou R$ " + saque + " com sucesso, seu saldo atual é de R$ " + this.saldo;
        if (saque > this.saldo) {
            pegar = " Você não tem saldo o sufuciente. Seu saldo atual é de R$ " + (this.saldo + saque);
        }
        return this.titular + pegar;
    }
}
let conta1 = new ContaBancaria("joão", 1000);
let conta2 = new ContaBancaria("torss", 1500);
let conta3 = new ContaBancaria("edu", 10000);
console.log(conta1.minhaconta());
console.log(conta1.deposito(200));
console.log(conta1.saque(1500));
console.log(conta2.minhaconta());
console.log(conta2.deposito(300));
console.log(conta2.saque(1000));
console.log(conta3.minhaconta());
console.log(conta3.deposito(5000));
console.log(conta3.saque(2000));
