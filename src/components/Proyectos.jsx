import "../styles/proyectos.css"

import criptomonedas from "../img/criptomonedas.png"
import clima from "../img/clima.png"
import samurai from "../img/samuraiboyz.png"
import controlgastos from "../img/controlgastos.png"
import presupuesto from "../img/presupuesto.png"
import { useState } from "react"

const Proyectos = () => {

    const [imagen, setImagen] = useState({ i1: false, i2: false });

    const iconoGit = (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
    );
    const iconoSalir = (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-door-exit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 12v.01" />
            <path d="M3 21h18" />
            <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
            <path d="M14 7h7m-3 -3l3 3l-3 3" />
        </svg>
    );



    const mouseOver = (img) => {
        setImagen({ ...imagen, [img]: true })
    }

    const mouseLeave = (img) => {
        setImagen({ ...imagen, [img]: false })
    }

    return (
        <div id="proyectos">
            <h2>Proyectos</h2>
            <div className="proyectos">
                <div className={`proyecto ${imagen.e1 === true ? "img-activa" : ""}`}>
                    <div className="proyecto-imagen" onMouseOver={() => mouseOver("e1")} onMouseLeave={() => mouseLeave("e1")}>
                        <img src={clima} />
                        <div className="proyecto-enlaces">
                            <a className="enlaces" href="https://clima-react-jb.netlify.app/" target={"_blank"}>{iconoSalir}</a>
                            <a className="enlaces" href="https://github.com/Chuliann/Clima-api" target={"_blank"}>{iconoGit}</a>
                        </div>
                    </div>
                    <h4>Clima</h4>
                    <p>Este fue el primer proyecto que hice con React, utiliza una api que trae informacion del clima en una ciudad ingresada por el usuario.</p>
                </div>

                <div className={`proyecto ${imagen.e2 === true ? "img-activa" : ""}`}>
                    <div className="proyecto-imagen" onMouseOver={() => mouseOver("e2")} onMouseLeave={() => mouseLeave("e2")}>
                        <img src={criptomonedas} />
                        <div className="proyecto-enlaces">
                            <a className="enlaces" href="https://cotizadorcripto-jb.netlify.app/" target={"_blank"}>{iconoSalir}</a>
                            <a className="enlaces" href="" target={"_blank"}>{iconoGit}</a>
                        </div>
                    </div>
                    <h4>Cotizador</h4>
                    <p>En este mini proyecto creado con react utilizo una api para cotizar criptos en diferentes divisas.</p>
                </div>

                <div className={`proyecto ${imagen.e3 === true ? "img-activa" : ""}`}>
                    <div className="proyecto-imagen" onMouseOver={() => mouseOver("e3")} onMouseLeave={() => mouseLeave("e3")}>
                        <img src={samurai} />
                        <div className="proyecto-enlaces">
                            <a className="enlaces" href="https://www.thesamuraiboyz.com" target={"_blank"}>{iconoSalir}</a>
                        </div>
                    </div>
                    <h4>Samurai Boyz</h4>
                    <p>Esta pagina tuve que desplegarla lo mas rapido posible y es por eso que las librerias que instale junto con las imagenes puestas (aunque esten comprimidas), lo terminaron haciendo muy pesado. Sin tener en cuenta eso, estoy muy orgulloso del diseño.</p>
                </div>

                <div className={`proyecto ${imagen.e4 === true ? "img-activa" : ""}`}>
                    <div className="proyecto-imagen" onMouseOver={() => mouseOver("e4")} onMouseLeave={() => mouseLeave("e4")}>
                        <img src={presupuesto} />
                        <div className="proyecto-enlaces">
                            <a className="enlaces" href="https://control-presupuesto-jb.netlify.app/" target={"_blank"}>{iconoSalir}</a>
                            <a className="enlaces" href="https://github.com/Chuliann/gastos-semanales" target={"_blank"}>{iconoGit}</a>
                        </div>
                    </div>
                    <h4>Gastos semanales</h4>
                    <p>Una aplicacion basica para controlar los gastos.</p>
                </div>

                <div className={`proyecto ${imagen.e5 === true ? "img-activa" : ""}`}>
                    <div className="proyecto-imagen" onMouseOver={() => mouseOver("e5")} onMouseLeave={() => mouseLeave("e5")}>
                        <img src={controlgastos} />
                        <div className="proyecto-enlaces">
                            <a className="enlaces" href="https://control-presupuesto-react-jb.netlify.app/" target={"_blank"}>{iconoSalir}</a>
                            <a className="enlaces" href="https://github.com/Chuliann/control-gastos" target={"_blank"}>{iconoGit}</a>
                        </div>
                    </div>
                    <h4>Control gastos</h4>
                    <p>Una mejora para la anterior app, esta vez con local storage para la persistencia.</p>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;