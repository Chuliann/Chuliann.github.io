import FormularioContacto from "./FormularioContacto.jsx";
import SliderLenguajes from "./SliderLenguajes.jsx" 
import {compass, check, pc, code} from "../utils/Svgs.jsx";
import "../styles/servicios.css";

const Servicios = ({lang}) => {

    
    return (
        <div id="servicios">
            
            <div className="contenedor_servicios_p">
                
                <div className="servicio_principal agrandar">

                    <div className="servicio_logo">{compass}</div>
                    <h2>Consultoría</h2>
                    <p>Una consultoría adecuada analiza las metas del cliente, el mercado, el público objetivo, el tiempo y dinero disponible, y tomando en cuenta todos los factores, propone soluciones y una hoja de ruta.</p>
                    <ul className="servicio_lista">
                        <li>{check} Libre de cargos</li>
                        <li>{check} </li>
                        <li>{check} </li>
                    </ul>
                </div>

                <div className="servicio_principal servicio_grande agrandar">
                    <div className="servicio_logo">{pc}</div>
                    <h2>Desarrollo web</h2>
                    <p>Una pagina web tiene que ser funcional, accesible y amigable con el usuario. Utilizo las ultimas tecnologias para optimizar al maximo los proyectos con los que trabajo.</p>
                    <ul className="servicio_lista">
                        <li>{check} Posicionamiento en los motores de busqueda</li>
                        <li>{check} Carga rapida</li>
                        <li>{check} E-commerce</li>
                    </ul>
                </div>

                <div className="servicio_principal agrandar">
                    <div className="servicio_logo">{code}</div>
                    <h2>Mantenimiento</h2>
                    <p>Un sitio web en constante crecimiento necesita un mantenimiento apropiado para no solo crecer, si no tambien estar protegido de los ataques ciberneticos.</p>
                    <ul className="servicio_lista">
                        <li>{check} Actualizacion constante</li>
                        <li>{check} Google analitycs</li>
                        <li>{check} Cambios necesarios</li>
                    </ul>
                </div>


            </div>

            <SliderLenguajes />

            {/* <FormularioContacto lang={lang} /> */}
        </div> 
    );
}
 
export default Servicios;