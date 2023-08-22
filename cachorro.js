"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return " Oi, sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }
    apresentarPara(humano) {
        return "Ola " + humano + " eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }
}
let rex = new Cachorro("Rex", "Labrador", 3);
let torss = new Cachorro("torss", "vira-lata", 16);
console.log(rex.nome);
console.log(torss.nome);
console.log(rex.apresentarPara("regis"));
console.log(torss.apresentarPara("regis"));
