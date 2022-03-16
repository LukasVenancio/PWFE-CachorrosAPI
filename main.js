'use strict'

const pesquisar = document.getElementById('pesquisar')

const criarImg = (imagem) =>{
    
    const img = document.createElement('img')
    img.classList.add('card-imagem')
    img.src = imagem

    return img
}

const pesquisarRacas = async () =>{
    
    const url = 'https://dog.ceo/api/breeds/list/all'

    const response = await fetch(url)
    const data = await response.json()

    return Object.keys(data.message)
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

const carregarRacas = async () =>{
    
    const lista = document.getElementById('lista-racas')

    const racas = await pesquisarRacas()

    lista.innerHTML = `<option>
                            ${racas.join("</option><option>")}
                        </option>`
}

pesquisar.addEventListener('click', carregarImagens)

carregarRacas()