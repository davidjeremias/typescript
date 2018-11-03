function jogo(iniciaEmBrasilia) {
    var time = 'ney e amigos';
    var cidade = 'Rio de janeiro';
    if (iniciaEmBrasilia) {
        cidade = 'brasilia';
    }
    console.log(time + " v\u00E3o jogar em " + cidade);
}
jogo(true);
