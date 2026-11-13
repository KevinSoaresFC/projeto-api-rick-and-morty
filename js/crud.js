/****************************************************************************************************************
 * Objetivo: Consumir os dados da API Rick and Morty e gerar os cards dinamicamente
 * Data: 09/11/2026
 * Autor: Kevin Soares Figueiredo Costa
 * Versão: 1.0
 * API: https://rickandmortyapi.com/api/character
 *****************************************************************************************************************/



const getAllPersonagens = async function(){
    let URL = 'https://rickandmortyapi.com/api/character'


    let response = await fetch(URL)


    let dados = await response.json()
    
    
    let divListDados = document.getElementById('container-cards')

    divListDados.innerText = '' 


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

// Executa a função dos cards
window.addEventListener('load', function(){
    getAllPersonagens()
})

