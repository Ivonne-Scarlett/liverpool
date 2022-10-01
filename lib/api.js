export const getAllCharacters = async () => {    
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        const characters = await response.json()
        const results = characters.results
        //console.log('desdeAPI',results)
        return results
    } catch (err) {
        alert('Error en el servidor',err)        
    }
}


