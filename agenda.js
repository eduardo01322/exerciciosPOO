"use strict";
class Evento {
    constructor(nome, dia, horario) {
        this.nome = nome;
        this.dia = dia;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEventos(evento) {
        this.eventos.push(evento);
    }
    listarEventos() {
        console.log("Meu(s) evento(s) ");
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + " no dia " + this.eventos[i].dia + " às " + this.eventos[i].horario);
        }
    }
    apagar(evento) {
        this.eventos = this.eventos.filter(item => item.nome != evento.nome);
        return "Evento apagado";
    }
}
const evento1 = new Evento("casamento", "10", "20h");
const evento2 = new Evento("musical", "04", "22h");
const evento3 = new Evento("encontro", "01", "23h");
const meusEventos = new Agenda();
meusEventos.adicionarEventos(evento1);
meusEventos.adicionarEventos(evento2);
meusEventos.adicionarEventos(evento3);
console.log(meusEventos.listarEventos());
console.log("");
console.log(meusEventos.apagar(evento3));
console.log(meusEventos.listarEventos());
