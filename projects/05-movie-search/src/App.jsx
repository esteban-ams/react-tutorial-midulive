import { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Movies } from './components/MovieList.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('debounced')
    getMovies({ search })
  }, 300)
    , [])

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
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
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button type="submit" className='btn'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      {
        search == ''
          ? <p>Enter a movie name to search for!</p>
          : <main>
            {
              loading ? <p>Searching for movies...</p> : <Movies movies={movies} />
            }
          </main>
      }


    </div>
  )
}

export default App
