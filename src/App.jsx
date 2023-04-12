import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import Proyectos from "./components/Proyectos.jsx"

import SocialBar from "./components/SocialBar.jsx"
import Resume from "./resume-julian-berton.pdf"
import Inicio from "./components/Inicio.jsx"
import Sitios from './components/Sitios.jsx';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [lang, setLang] = useState("en");

 

  useEffect(() => {
    var ln = window.navigator.language || navigator.browserLanguage;
    if (ln.includes("es")) {
      setLang("es")
    }
    
  }, [])

  return (
      <Router>
        <Routes>

          <Route element={<Header />} path="/">
            <Route index element={<Inicio />} />
            <Route element={null} path='services'/>
            <Route element={<Proyectos />} path="proyects" />
            <Route element={<Sitios />} path="websites" />
          </Route>

        </Routes>
      </Router>
  )
}

export default App
