import { useEffect, useState } from "react"
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// custom hook para recuperar la imagen de la fact
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log("file: App.jsx:17 ~ useEffect ~ firstWord:", threeFirstWord)

        fetch(`https://cataas.com/cat/says/${fact}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log("file: App.jsx:24 ~ useEffect ~ response:", response)
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl: 'https://cataas...' }