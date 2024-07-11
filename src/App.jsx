import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import 'normalize.css';
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);


  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    AOS.init()

  
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-text">
            <span className="loading-fill">JB</span>
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}

    </>
  )
}

export default App
