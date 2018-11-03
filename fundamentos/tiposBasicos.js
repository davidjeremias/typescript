//boolean
var estaPago = false;
//number
var idade = 31;
var valor = 1.99;
//string
var empresa = 'u2d';
var razao = "u2d";
//template string
var nome = 'david';
console.log("ola, sou o " + nome + " e tenho " + idade + " anos");
//array
var notas = [8, 10, 5];
var convidados = ['david', 'love', 'davi'];
var url;
//tuplas
var alunos = ['david', 10, 'programacao', true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 1] = "vermelho";
    Cor[Cor["verde"] = 2] = "verde";
    Cor[Cor["azul"] = 3] = "azul";
})(Cor || (Cor = {}));
;
var corFundo = Cor.verde;
console.log(corFundo);
//any
var numero = 4;
numero = 'string';
numero = true;
var tipos = ['david', 10];
//void
function alerta() {
    alert('string');
}
//null e undefined => não faz sentido
var n = null;
var u = undefined;
