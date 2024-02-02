const btnIcon = document.getElementById('iconSearch')
const inputSearch = document.getElementById('inputSearch')
let business = []

btnIcon.addEventListener('click', async() => {
    if (inputSearch.value.trim().length > 0){
        search(inputSearch.value)
        business = await search(inputSearch.value)
        console.log('$$Business => ', busisness)
    }
})