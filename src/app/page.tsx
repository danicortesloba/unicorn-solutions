import Header from "../app/components/Header"
import Intro from "./components/Home"
import Servicios from "./components/Servicios"

export default function Home() {
  return (
    <div>
      <Header/>
      <div id="home"><Intro/></div>
      <div id="servicios"><Servicios/></div>
    </div>
  )
}
