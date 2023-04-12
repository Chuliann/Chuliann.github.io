import "../styles/hero.css";
import herochulian from "../img/herochulian2.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_content">
                <h2 className="">
                    <span>Mi nombre es julian berton </span> <br></br>y creo
                    cosas para la web
                </h2>
                <p>
                    ¡Hola! Soy un apasionado de la tecnología y el diseño, con
                    22 años y actualmente en mi tercer año de carrera
                    relacionada con IT.
                </p>
                <p>
                    Ya sea que necesites un sitio web para tu negocio o busques
                    un profesional en tecnología, estoy aquí para ayudarte.
                    Contáctame si tienes alguna pregunta o consulta, ¡estaré
                    encantado de ayudarte!
                </p>
            </div>
            <div className="hero_image">
                <img src={herochulian} alt="yo"></img>

            </div>
        </div>
    );
};

export default Hero;
