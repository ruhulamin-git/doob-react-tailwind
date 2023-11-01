import Business from "./Componants/Business/Business"
import Footer from "./Componants/Footer/Footer"
import Home from "./Componants/Home/Home"
import LatestNews from "./Componants/LatestNews/LatestNews"
import Nav from "./Componants/Nav"
import Portfolio from "./Componants/Portfolio/Portfolio"
import Pricing from "./Componants/Pricing/Pricing"

function App() {
  return (
    <>
      <Nav />
      <div>
        <Home />
        <section className=" w-full h-bottom bg-gradient-to-r from-cyan-950 via-black to-rose-950 ">
          <Business />
          <Portfolio />
          <Pricing />
          <LatestNews />
          <Footer />
        </section>
      </div>

    </>
  )
}

export default App
