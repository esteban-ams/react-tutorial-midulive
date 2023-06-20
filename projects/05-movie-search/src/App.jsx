import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Movies } from './components/MovieList.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'


function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }



  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <label>Search for a Movie</label>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent',
          }} value={search} onChange={handleChange} name='search' placeholder='Avengers, Star Wars, Avatar...' type="text" />
          <button type="submit" className='btn'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
