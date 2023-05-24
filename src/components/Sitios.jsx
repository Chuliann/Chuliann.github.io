import { useEffect, useState } from "react";
import Proyecto from "../utils/Proyecto.jsx";
import sitios from "../sitios.json";

const Sitios = ({lang}) => {

    const [activo, setActivo] = useState(0);
    /* Agregar links al sitio */
    useEffect(() => {
        console.log(sitios);
    }, [])

    return(
        <div className="contenedor_articulos sitios">
            {sitios?.map((sitio, index) => ( 
                <Proyecto 
                    key={index} 
                    activo={activo} 
                    indice={index} 
                    setActivo={setActivo} 
                    proyecto={sitio} 
                    limite={sitios.length - 1}
                    izquierda={false}
                    lang={lang}
                />
            ))}
        </div>
    );
}

export default Sitios;