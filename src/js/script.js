// menu funcionando
// botao de salvar
// avaliacao dos clientes dinamica
// galeria de fotos

// manipulacao com dom
// botao de salvar (local storage)
// consumo de arrays de objetos
// utilizar arrow function e template string
// programacao funcional ?

const menu = () => {
    const headerUser = document.querySelector(".header__user")
    const headerLogin = document.querySelector(".header__login")

    headerUser.addEventListener('click', () => {
        headerLogin.classList.toggle('hidden')
        
    })
}
menu()

const favorite = () => {
    const buttonFavorite = document.querySelector(".button__favorite")
    const imovel = document.querySelector('.section__title')

    buttonFavorite.addEventListener('click', () => {
        if(!localStorage.getItem('favorite')){
            localStorage.setItem('favorite', imovel.innerHTML)
        }
        else{
            localStorage.removeItem('favorite')
        }
    })

    if(localStorage.getItem('favorite')){
        imovel.innerHTML = localStorage.getItem('favorite')
    }
}
favorite()

const renderComments = () => {

}

const renderPhotos = () => {

}