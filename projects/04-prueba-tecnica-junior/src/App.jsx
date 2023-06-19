import './App.css'
import { Otro } from './Components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // recupera una nueva fact al hacer click
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <button onClick={handleClick}><span>Get a new fact</span></button>}

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image using the 3 first words of ${fact} from the API`} />}

      <Otro />
    </main>
  )
}

export default App
