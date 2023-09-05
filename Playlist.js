"use strict";
class Musica {
    constructor(titulo, artista, duração) {
        this.titulo = titulo;
        this.artista = artista;
        this.duração = duração;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionar(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo: " + this.musicas[this.indiceAtual].titulo + ' - '
                + this.musicas[this.indiceAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Musica pausada";
        }
        else {
            return "nenhuma música está endo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A playlist está vazia";
        }
    }
}
const musica1 = new Musica("n", "anonimo", 1000);
const musica2 = new Musica("e", "anonimo", 1000);
const musica3 = new Musica("r", "anonimo", 1000);
const minhaPlaylist = new Playlist();
minhaPlaylist.adicionar(musica1);
minhaPlaylist.adicionar(musica2);
minhaPlaylist.adicionar(musica3);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
