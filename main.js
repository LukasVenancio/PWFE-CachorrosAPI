'use strict'

const pesquisar = document.getElementById('pesquisar')

const criarImg = (imagem) =>{
    
    const img = document.createElement('img')
    img.classList.add('card-imagem')
    img.src = imagem

    return img
}

const pesquisarCachorro = async (raca) =>{

    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const carregarImagens = async () => {

    const imagemContainer = document.getElementById('imagem-container')

    const raca = document.getElementById('raca').value

    const imagens = await pesquisarCachorro(raca)
    const tagImagens = imagens.message.map(criarImg)

    imagemContainer.replaceChildren(...tagImagens)
}

pesquisar.addEventListener('click', carregarImagens)