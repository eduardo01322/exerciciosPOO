class ContaBancaria{
    saldo:number;
    titular: string;

    constructor (titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;

}

minhaconta(){
    return this.titular + ", o saldo atual da 'minhaconta' é de R$ " + this.saldo
}

deposito(deposito: number){
    this.saldo = this.saldo + deposito
    return "Você depositou R$ " + deposito + "seu dinheiro foi depositado com suscesso. Seu saldo atual é de R$" + this.saldo

}

saque(saque: number){
        let pegar = " você sacou R$ " + saque + "com sucesso";
        if(saque > this.saldo)
        {
         pegar = " Você não tem saldo o sufuciente. Seu saldo atual é de R$ " + this.saldo;
        }
        return this.titular + pegar;
}
}

let conta1 =  new ContaBancaria("joão", 1000);
let conta2 =  new ContaBancaria("joão", 1000);
let conta3 =  new ContaBancaria("joão", 1000);

console.log(conta1.minhaconta());
console.log(conta1.deposito(200));
console.log(conta1.saque(0));
