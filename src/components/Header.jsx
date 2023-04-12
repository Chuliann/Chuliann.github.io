import { useEffect, useState } from "react";
import logo from "../img/Logo.jpeg";
import "../styles/header.css";

import { Outlet, NavLink } from "react-router-dom";
import Resume from "../resume-julian-berton.pdf"

/* Iconos */
import {github, linkedin} from "../utils/Svgs.jsx";

const Main = () => {
    const [expandido, setExpandido] = useState(false);
    const [navOculta, setNavOculta] = useState(false);

    const handleMenu = () => {
        setExpandido(!expandido);
        document.querySelector("body").classList.toggle("blur-a");
    };

    useEffect(() => {
        let lastScroll = window.scrollY;
        const handleScroll = (event) => {
            if (lastScroll < window.scrollY) {
                setNavOculta(true);
            } else {
                setNavOculta(false);
            }
            lastScroll = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="main">
            <header>
                <nav className={`nav ${navOculta ? "nav-oculta" : ""}`}>
                    <div className="nav-seccion-logo">
                        <NavLink
                            className="logo"
                            to={"/"}
                        >
                            <img src={logo} alt="logo" />{" "}
                        </NavLink>
                    </div>

                    <div className="nav-seccion-links">
                        <NavLink className="agrandar" to={"/"}>Inicio</NavLink>
                        <NavLink className="agrandar" to={"/services"}>Servicios</NavLink>
                        <NavLink className="agrandar" to={"/proyects"}>Proyectos</NavLink>
                        <NavLink className="agrandar" to={"/websites"}>Sitios web</NavLink>
                    </div>

                    <div className="nav-seccion-redes">
                        <a href="https://www.linkedin.com/in/julian-berton/" className="agrandar" target={"_blank"}>{linkedin}</a>
                        <a href="https://github.com/Chuliann" className="agrandar" target={"_blank"}>{github}</a>
                    </div>

                    <div className="nav-seccion-idioma">
                        <a href="#">ES</a>
                        <a href="#">EN</a>
                    </div>

                    
                    <button className="hamburger" onClick={handleMenu}>
                        <span
                            className={`line1_hamburger ${
                                expandido ? "active" : ""
                            }`}
                        ></span>
                        <span
                            className={`line2_hamburger ${
                                expandido ? "active" : ""
                            }`}
                        ></span>
                        <span
                            className={`line3_hamburger ${
                                expandido ? "active" : ""
                            }`}
                        ></span>
                    </button>

                    <div className={`nav-movil ${expandido ? "expandido" : ""}`}>
                        <div className="nav-seccion-links">
                            <NavLink to={"/"}>Inicio</NavLink>
                            <NavLink to={"/services"}>Servicios</NavLink>
                            <NavLink to={"/proyects"}>Proyectos</NavLink>
                            <NavLink to={"/websites"}>Sitios web</NavLink>
                        </div>

                        <div className="nav-seccion-idioma">
                            <a href="#">ES</a>
                            <a href="#">EN</a>
                        </div>
                    </div>
                </nav>

                
                <div id="overlay"></div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Main;
