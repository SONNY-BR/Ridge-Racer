const jogos = document.querySelectorAll('.jogo');

jogos.forEach((jogo) =>{
    jogo.addEventListener('click', () =>{

        removerSelecaoDoJogo();
        jogo.classList.add('selecionado');

        alterarVideoJogoSelecionado(jogo);

        alterarNomeJogoSelecionado(jogo);

    })
})

function alterarNomeJogoSelecionado(jogo) {
    const nomeJogo = document.getElementById('nome-jogo');
    nomeJogo.innerText = jogo.getAttribute('data-name');
}

function alterarVideoJogoSelecionado(jogo) {
    const videoJogoVideo = document.querySelector('.jogo-video');
    const idJogo = jogo.attributes.id.value;
    videoJogoVideo.src = `./src/video/card-${idJogo}.mp4`;
}

function removerSelecaoDoJogo() {
    const jogoSelecionado = document.querySelector('.selecionado');
    jogoSelecionado.classList.remove('selecionado');
}