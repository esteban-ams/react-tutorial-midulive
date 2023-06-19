import { useCatImage } from '../hooks/useCatImage'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'Random cat fact' })
    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )

}