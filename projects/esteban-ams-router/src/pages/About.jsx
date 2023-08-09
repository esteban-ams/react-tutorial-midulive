import { Link } from "../Link.jsx"
export function AboutPage() {
    return (
      <div>
          <h1>Sobre Mi</h1>
          <div>
            <img src="https://yt3.ggpht.com/yti/AOXPAcX9Kyb2PdtGorko-SPIh61TWU7ejDYQfgHpXqct=s108-c-k-c0x00ffffff-no-rj" alt="foto esteban-ams" />
          </div>
          <p>Soy esteban-ams, estudiante de la UTEM de Ingenieria Civil en Computación y Desarrollador Fullstack</p>
          <Link to="/">Ir al Inicio</Link>
      </div>
    )
  }