var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "ola eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var david = new Cliente('david', 31);
var apresentacao = david.apresentar();
console.log(apresentacao.length);
