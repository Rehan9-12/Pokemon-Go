export const getPosts = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150",{
        method:'GET'
    })
    const data = await response.json()
    
    

    const pokemonDetailedInfo = await Promise.all(
        data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url)
            const details = await detailsResponse.json();
            

            return {
                id : details.id,
                name : details.name,
                image: details.sprites?.front_default,
                types: Array.isArray(details.types) ? details.types.map((t) => t.type.name) : ["Unknown"]

            }
        })
    )
    return pokemonDetailedInfo;
}

