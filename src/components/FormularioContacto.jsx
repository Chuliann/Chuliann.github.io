import { useState } from "react";
import "../styles/formulariocontacto.css";


const FormularioContacto = () => {
    
    const [nombre, setNombre] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        
        
    }

    return ( 
        <form className="formulario" onSubmit={handleForm}>
            <label>Nombre: </label>
            <input
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            ></input>
            <button 
                type="submit"
            >Enviar</button>
        </form>
    );
}
 
export default FormularioContacto;