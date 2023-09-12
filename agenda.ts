class Evento {
    nome: string;
    dia: string;
    horario: string;

    constructor(nome: string, dia: string, horario: string) {
        this.nome = nome;
        this.dia = dia;
        this.horario = horario;

    }

}
class Agenda {
    private eventos: Evento[] = [];


    constructor() {

    }
    adicionarEventos(evento: Evento) {
        this.eventos.push(evento);
    }

    listarEventos() {
        console.log("Meu(s) evento(s) ");
        for(let i=0; i<this.eventos.length; i++){
        console.log(this.eventos[i].nome +" no dia "+this.eventos[i].dia+" às "+this.eventos[i].horario);
    }
    }
    apagar(evento:Evento) {
        this.eventos= this.eventos.filter(item =>item.nome!= evento.nome);
        return "Evento apagado"
    }
}
const evento1 = new Evento("hiroshima","6/8","8:15");
const evento2 = new Evento("gemeas","11/9","8:46");
const evento3 = new Evento("evento","23/12","16:30");
const meusEventos = new Agenda();
meusEventos.adicionarEventos(evento1);
meusEventos.adicionarEventos(evento2);
meusEventos.adicionarEventos(evento3);
console.log(meusEventos.listarEventos());
console.log("");
console.log(meusEventos.apagar(evento3));
console.log(meusEventos.listarEventos());