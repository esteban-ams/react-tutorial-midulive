import { Link } from "../Link.jsx"

export function HomePage() {
    return (
      <div>
          <h1>esteban-ams Router</h1>
          <p>Esta pagina es de ejemplo para React Router</p>
          <Link to="/about">Ir a Sobre Mi</Link>
      </div>
    )
  }