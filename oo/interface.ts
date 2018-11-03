function imprimeIdade(pessoa: {idade: number}){
    console.log(pessoa.idade);
}

let pes = {nome: 'david', idade: 31};

imprimeIdade(pes);

interface Iidade{
    idade: number;
}

class Pessoas implements Iidade{
    idade;
}