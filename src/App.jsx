import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import ProductViewer from "./components/ProductViewer.jsx"
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
    </main>
  )
}

export default App