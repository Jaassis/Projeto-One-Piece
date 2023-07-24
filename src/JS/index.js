const personagens = document.querySelectorAll ('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        const imagenPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagenPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.jpg`;

        const nomePersonagem = document.getElementById ('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById ('descricao-personagem');
        
        descricaoPersonagem.innerText = personagem.getAttribute ('data-description');
        
    })
})