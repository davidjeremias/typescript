class Cliente {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `ola eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}

let david: Cliente = new Cliente('david', 31);

let apresentacao: string = david.apresentar();

console.log(apresentacao.length);