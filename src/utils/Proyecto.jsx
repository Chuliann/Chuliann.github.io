import {rightArrow, leftArrow} from "./Svgs.jsx";
import { useEffect, useState } from "react";
import useImage from "./useImage.jsx";
import { Link } from "react-router-dom";


const Proyecto = ({ proyecto, indice, setActivo, activo, limite, izquierda, lang }) => {
    const { loading, error, image } = useImage(proyecto.img, proyecto.ext);
    const [direccion, setDireccion] = useState(false);

    const handleNav = (e, action) => {
        e.preventDefault();
        if(action === "left") {
            if(activo === 0) {
                setActivo(limite);
            } else {
                setActivo(activo - 1)
            }
        } else {
            if(activo === limite) {
                setActivo(0);
            } else {
                setActivo(activo + 1);
            }
        }
    }

    const cambiarTransicion = () => {
        if(activo > indice) {
            setDireccion(false);
            if(indice === 0 && activo === limite) {
                setDireccion(true);
            }
        } else {
            setDireccion(true);
        }
        if(indice === limite && activo === 0) {
            setDireccion(false);
        }
    }

    useEffect(() => {
        cambiarTransicion();
    }, [activo])

    return (
        <article 
            className={`proyecto ${direccion ? "right" : "left"} `} 
            data-index={indice} data-status={`${activo === indice ? "activo" : "inactivo"}`}>
            {/* Poniendo los elementos a la izquierda o derecha dependiendo si es los sitios o si son proyectos */}
            {izquierda ? (
                <div className="article-image-section">
                    {!loading ? <img src={image} alt="proyect_img"></img> : null}
                </div>
            ) : (
                <div className="article-description-section">
                    <Link className="agrandar" to="/proyects">{leftArrow} Proyectos</Link>
                    <div className="tecnologias">
                        {proyecto.tecnologias.map(tecnologia => (
                            <p>{tecnologia}</p>
                        ))}
                    </div>
                    <p className="descripcion">{proyecto.descripcion[lang]}</p>
                </div>
            )}
            {izquierda ? (
                <div className="article-description-section">
                    <Link className="agrandar" to="/websites">Sitios {rightArrow}</Link>
                    <p className="descripcion">{proyecto.descripcion[lang]}</p>
                </div>
            ) : (
                <div className="article-image-section">
                    {!loading ? <img src={image} alt="proyect_img"></img> : null}
                </div>
            )}
            {izquierda ? (
                <div className="article-tittle-section">
                    <h3>{proyecto.nombre}</h3>
                </div>
            ) : (
                <div className="article-nav-section">
                    <button href="#" className="desplazarIzquierda" onClick={(e) => handleNav(e, "left")}>{leftArrow}</button>
                    <button href="#" className="desplazarDerecha" onClick={(e) => handleNav(e, "right")}>{rightArrow}</button>
                </div> 
            )}
            {izquierda ? (
                <div className="article-nav-section">
                    <button href="#" className="desplazarIzquierda" onClick={(e) => handleNav(e, "left")}>{leftArrow}</button>
                    <button href="#" className="desplazarDerecha" onClick={(e) => handleNav(e, "right")}>{rightArrow}</button>
                </div> 
                
            ) : (
                <div className="article-tittle-section">
                    <h3>{proyecto.nombre}</h3>
                </div>  
            )}
            
            
            
            
        </article>
    );
};

export default Proyecto;