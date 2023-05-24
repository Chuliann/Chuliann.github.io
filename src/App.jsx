import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import Proyectos from "./components/Proyectos.jsx"

import Inicio from "./components/Inicio.jsx"
import Sitios from './components/Sitios.jsx';
import Servicios from './components/Servicios.jsx';
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

          <Route element={<Header setLang={setLang} lang={lang} />} path="/">
            <Route index element={<Inicio lang={lang} />} />
            <Route element={<Servicios lang={lang} />} path='services'/>
            <Route element={<Proyectos lang={lang} />} path="proyects" />
            <Route element={<Sitios lang={lang} />} path="websites" />
          </Route>

        </Routes>
      </Router>
  )
}

export default App
