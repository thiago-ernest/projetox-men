//  1 - Quando passar o mouse em cima do personagem na listagem,devemos seleciona-na
// los objetivo
// passo 1 -pegar os personagens no js para poder verificar quando o usuario passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');


// passo 2 -adicionar a classe selecionado no personagem que o usuário o cursor do mouse
personagens.forEach((personagem)=> {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450) {
            window.scrollTo({top: 0, behavior:'smooth'})
        }
        //    passo 3 - verificar se já existe um personagem selesionado, se sim, devemos remover a seleção 
    const personagemSelecionado = document.querySelector('.selecionado');personagemSelecionado.classList.remove('selecionado')

       personagem.classList.add('selecionado');

    //    passo 1 - pegar o elmento do personagem grande pra adicionar as informaçoes nele
    const imagempersonagemGrande = document.querySelector('.personagem-grande');

    // paso 2 - alterar a imagem do personagem grande 
     const idpersonagem = personagem.attributes.id.value;
     console.log(idpersonagem);
     imagempersonagemGrande.src = `./src/imagens/card-${idpersonagem}.png`; 

    //  passo 3 - alterer o nome do personagem grande 
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
     
   //    passo - 4 Alterar a descrição do personagem
   const descricaoPersonagem = document.getElementById('descricao-personagem');
   descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    

    })
})