import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${anyFact}?size=50&color=red&json=true`

function App() {
  const [fact, setFact] = useState()
  const [factBool, setFactBool] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        setFactBool(true)
      })
  }, [factBool])

  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    console.log("file: App.jsx:17 ~ useEffect ~ firstWord:", threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log("file: App.jsx:24 ~ useEffect ~ response:", response)
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {factBool && <button onClick={() => setFactBool(false)}><span>Get a new fact</span></button>}

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image using the 3 first words of ${fact} from the API`} />}
    </main>
  )
}

export default App
