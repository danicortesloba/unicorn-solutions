import Header from "../app/components/Header"
import Intro from "./components/Home"
import Servicios from "./components/Servicios"
import Experiencia from "./components/Experiencia"
import Porque from "./components/Porque"
import Contacto from "./components/Contacto"

export default function Home() {
  return (
    <div>
      <Header/>
      <div id="home"><Intro/></div>
      <div id="servicios"><Servicios/></div>
      <div id="experiencia"><Experiencia/></div>
      <div id="porque"><Porque/></div>
      <div id="contacto"><Contacto/></div>
    </div>
  )
}
