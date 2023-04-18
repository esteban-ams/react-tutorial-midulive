import { useState } from "react"
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    const [name, setName] = useState('midudev')

    return (
        <section className='App'>
        <TwitterFollowCard userName={name}>
            Migue Ángel Durán
            </TwitterFollowCard>
        <TwitterFollowCard userName="pheralb" >
            Pablo Hernandez
        </TwitterFollowCard>

        <button onClick={() => setName('pedromichel')}>
            Cambio Nombre
        </button>

        </section>



    )
}