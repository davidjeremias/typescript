function jogo(iniciaEmBrasilia: boolean){
    const time = 'ney e amigos';
    let cidade = 'Rio de janeiro';

    if(iniciaEmBrasilia){
        cidade = 'brasilia'
    }

    console.log(`${time} vão jogar em ${cidade}`);
}

jogo(true);