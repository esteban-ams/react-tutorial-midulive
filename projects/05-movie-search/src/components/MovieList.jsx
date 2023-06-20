import { MoviePoster } from "./Movies";

function MovieList({ movies }) {
    return (
        <ul className="movie-list">
            {
                movies.map(movie => (
                    <li key={movie.id} className="movie-list__item">
                        <MoviePoster key={movie.id} movie={movie} />
                    </li>
                ))
            }
        </ul>
    )
}


function NoMovieResults() {
    return (
        <p>Ningun resultado encontrado</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <MovieList movies={movies} />
            : <NoMovieResults />
    )
}