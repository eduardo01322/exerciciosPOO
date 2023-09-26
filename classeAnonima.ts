const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";
    
    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());