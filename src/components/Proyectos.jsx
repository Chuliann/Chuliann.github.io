import "../styles/proyectos.css";
import proyectos from "../proyectos.json";
import { useState } from "react";

import Proyecto from "../utils/Proyecto.jsx";

const Proyectos = () => {
    const [activo, setActivo] = useState(0);
    

    return(
        <div className="contenedor_articulos">
            {proyectos?.map((proyecto, index) => ( 
                <Proyecto 
                    key={index} 
                    activo={activo} 
                    indice={index} 
                    setActivo={setActivo} 
                    proyecto={proyecto} 
                    limite={proyectos.length - 1}
                    izquierda={true}
                />
            ))}
        </div>
    );
};



export default Proyectos;
