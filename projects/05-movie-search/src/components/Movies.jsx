export function MoviePoster({ movie }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
        </div>

    )
}

