// Facit uppgift 1
// en reference till vår color input
const colorInput = document.querySelector('.colorInput')
colorInput.addEventListener('input', () => {
    // ändrar background färg på body elementet till värdet utav color input
    document.querySelector('body').style.backgroundColor = colorInput.value
})

// Facit uppgift 2
document.querySelector('.btn').addEventListener('click', () => {
    // tar alla html taggar med en class utav 'animation_cube' och går igenom alla
    const docs = document.querySelectorAll('.animation_cube');
    for (let i = 0; i < docs.length; i++) {
        const doc = docs[i];
         // ifall 'animation_cube_moved' klassen redan finns så kommer den ta bort den annars lägger den till den klassen
        doc.classList.toggle('animation_cube_moved');
         // lägger till en delay
        doc.style.transitionDelay = `${70 * i}ms`
    }
})