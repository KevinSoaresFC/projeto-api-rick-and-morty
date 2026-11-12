/****************************************************************************************************************
 * Objetivo: Consumir os dados da API Rick and Morty e gerar os cards dinamicamente
 * Data: 09/11/2026
 * Autor: Kevin Soares Figueiredo Costa
 * Versão: 1.0
 * API: https://rickandmortyapi.com/api/character
 *****************************************************************************************************************/

// Retorna todos os personagens da página 1
const getAllPersonagens = async function(){
    let URL = 'https://rickandmortyapi.com/api/character'

    // O await faz o código "esperar" a resposta da API (substitui o .then)
    let response = await fetch(URL)

    // Converte a resposta para JSON
    let dados = await response.json()
    
    // Recebe o elemento principal para colocar a lista de dados
    let divListDados = document.getElementById('container-cards')

    divListDados.innerText = '' // Limpando a lista de cards (caso tenha algo)

    // O array de personagens fica dentro de dados.results
    dados.results.forEach(function(itemPersonagem){
        
        
        let nomePersonagem    = itemPersonagem.name
        let imagemPersonagem  = itemPersonagem.image
        let statusPersonagem  = itemPersonagem.status
        let especiePersonagem = itemPersonagem.species



        let divCard      = document.createElement('div')
        let imgAvatar    = document.createElement('img')
        let h2Nome       = document.createElement('h2')
        let pStatus      = document.createElement('p')
        let pEspecie     = document.createElement('p')


        divCard.setAttribute('class', 'card')
        imgAvatar.setAttribute('src', imagemPersonagem)
        imgAvatar.setAttribute('alt', nomePersonagem)




        h2Nome.innerText   = nomePersonagem
        pStatus.innerText  = 'Status: ' + statusPersonagem
        pEspecie.innerText = 'Espécie: ' + especiePersonagem






        divListDados.appendChild(divCard)
        divCard.appendChild(imgAvatar)
        divCard.appendChild(h2Nome)
        divCard.appendChild(pStatus)
        divCard.appendChild(pEspecie)
    })
}

// Executa a função para carregar os cards assim que a tela (window) for carregada
window.addEventListener('load', function(){
    getAllPersonagens()
})

