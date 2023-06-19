import './App.css'

function App() {

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <label>Search for a Movie</label>
        <form className="form">
          <input placeholder='Avengers, Star Wars, Avatar...' type="text" name="" id="" />
          <button type="submit" className='btn'>Search</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>

    </div>
  )
}

export default App
