//quando não informado o tipo o typescript associa ao valor da variavel
let quantidade = 20;
//quantidade = 'string' => não compila

//typescript analisa os itens do array e associa o valor
let x = [1, 2, 3, null];
//x[0] = 'string' => não compila

//contextual typing
window.onmousedown = function(evento){
    this.console.log(evento.button);
}
//infere que o tipo da funcão e de evento.onclick