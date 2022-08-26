import { useEffect, useState } from "react";
import logo from "../img/Logo.jpeg";
import "../styles/header.css";

const Header = () => {

    const [expandido, setExpandido] = useState(false);
    const [navOculta, setNavOculta] = useState(false);


    const handleMenu = () => {
        setExpandido(!expandido);
        document.querySelector("body").classList.toggle("blur-a");
    }

    useEffect(() => {

        let lastScroll = window.scrollY;
        const handleScroll = event => {
            if (lastScroll < window.scrollY) {
                setNavOculta(true);
            } else {
                setNavOculta(false);
            }
            lastScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div id="header">

            <header>
                <nav className={`nav ${navOculta ? 'nav-oculta' : ""}`}>
                    <a className="logo" href="https://github.com/Chuliann" target="_blank"><img src={logo} alt="logo" /> <p className="beta">Beta</p></a>

                    <button className="hamburger" onClick={handleMenu}>
                        <span className={`line1_hamburger ${expandido ? "active" : ""}`}></span>
                        <span className={`line2_hamburger ${expandido ? "active" : ""}`}></span>
                        <span className={`line3_hamburger ${expandido ? "active" : ""}`}></span>
                    </button>
                    <div className={`nav-items ${expandido ? "expandido" : ""}`}>
                        <a href="#">Quien soy</a>
                        <a href="#">Proyectos</a>
                        <a href="https://drive.google.com/file/d/1c8BADxT24R1lp_YnWKXeGFOXn7IlB2mB/view?usp=sharing" target={"_blank"}>Curriculum</a>
                    </div>
                </nav>

                <div className="hero">
                    <div className="hero-content">
                        <p>Bienvenido, mi nombre es</p>
                        <h2>Julian Berton</h2>
                    </div>
                </div>
                <div id="overlay"></div>
            </header>
        </div>
    );
}

export default Header