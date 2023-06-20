const API_KEY = 'd7ea36ed'

export const searchMovies = async ({ search }) => {
    if (search === '') return null
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            image: movie.Poster,
            year: movie.Year,
        }))
    } catch (error) {
        throw new Error('Error searching movies')
    }
}