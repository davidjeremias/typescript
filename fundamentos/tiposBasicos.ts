//boolean
let estaPago: boolean = false;

//number
let idade: number = 31;
let valor: number = 1.99;

//string
let empresa: string = 'u2d';
let razao: string = "u2d";

//template string
let nome: string = 'david';
console.log(`ola, sou o ${nome} e tenho ${idade} anos`);

//array
let notas: number[] = [8, 10, 5];
let convidados: string[] = ['david', 'love', 'davi'];
let url: Array<any>;

//tuplas
let alunos: [string, number, string, boolean] = ['david', 10, 'programacao', true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

//enum
enum Cor {vermelho = 1, verde, azul};
let corFundo: Cor = Cor.verde;
console.log(corFundo);

//any
let numero: any = 4;
numero = 'string';
numero = true;
let tipos: any[] = ['david', 10];

//void
function alerta(): void{
    alert('string');
}

//null e undefined => não faz sentido
let n: null = null;
let u: undefined = undefined;


