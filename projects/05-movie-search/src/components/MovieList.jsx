import { useRef } from "react";
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
    // const isFirstRender = useRef(true)

    return (
        <>
            {/* {
                isFirstRender
                    ? (
                        <p className="no-movie-results">No more movies to show</p>
                    )
                    : { isFirstRender.current = false }
            } */}
            <p className="no-movie-results">No movies to show</p>
        </>

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