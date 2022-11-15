// Facit Fråga 1
document.querySelector('.text').textContent = 'Jakob'

// en reference till knappen
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    // Facit Fråga 2
    console.log(document.querySelector('input').value)

    // Facit Fråga 3
    if (button.style.background === 'red') button.style.background = 'blue'
    else button.style.background = 'red'
})
