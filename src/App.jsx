import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Proyectos from "./components/Proyectos"
import SocialBar from "./components/SocialBar"
import Footer from "./components/Footer"

function App() {

  const [lang, setLang] = useState("en");
  

  useEffect(() => {
    var ln = window.navigator.language || navigator.browserLanguage;
    if(ln.includes("es")) {
      setLang("es")
    }
  }, [])

  return (
    <div className="App">
      <Header />

      <Proyectos />

      <SocialBar />

      <Footer />
    </div>
  )
}

export default App
