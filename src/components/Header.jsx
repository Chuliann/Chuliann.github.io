import { useState } from "react";
import logo from "../img/Logo.jpeg";
import "../styles/header.css";

const Header = () => {

    const [expandido, setExpandido] = useState(false);



    const handleMenu = () => {
        setExpandido(!expandido);
    }

    return (
        <header>
            <nav className="nav">
                <a className="logo" href="https://github.com/Chuliann" target="_blank"><img src={logo} alt="logo" /> <p className="beta">Beta</p></a>
                    
                <button className="hamburger" onClick={handleMenu}>
                    <span className={`line1_hamburger ${expandido ? "active" : ""}`}></span>
                    <span className={`line2_hamburger ${expandido ? "active" : ""}`}></span>
                    <span className={`line3_hamburger ${expandido ? "active" : ""}`}></span>
                </button>
                <div className={`nav-items ${expandido ? "expandido" : ""}`}>
                    <a href="#">Quien soy</a>
                    <a href="#">Proyectos</a>
                </div>
            </nav>

            <div className="hero">
                <div className="hero-content">
                    <p>Bienvenido, mi nombre es</p>
                    <h2>Julian Berton</h2>
                </div>
            </div>
        </header>
    );
}

export default Header