class Funcionario{

    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    calculaImposto(taxa: number = 8){
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`)
    }
}

class Gerente extends Funcionario{}

let ger = new Gerente('david', 2000);
ger.calculaImposto();

class Executivo extends Funcionario{
    calculaImposto(taxa: number = 10){
        console.log('executivo paga mais');
        super.calculaImposto(taxa);
    }
}

let exec = new Executivo('david', 20000);
exec.calculaImposto();