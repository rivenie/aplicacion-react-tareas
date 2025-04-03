import { useState, React } from "react";
import { v4 as uuidv4 } from 'uuid'
import "../css/TareaFormulario.css"
/*Aquí se obtiene básicamente la tarea con los eventos onChange y onSubmit en el formulario. Y al obtenerla se manda al componente AppCompleta. En AppCompleta hay otra función con la que trabaja la tarea para poder mostrarla.*/

function TareaFormulario(props){

  const [input, setInput]= useState("");

  const obtenerEnvio = e =>{
    setInput(e.target.value);
  }

  const enviarEnvio = e =>{
    e.preventDefault()
    const tareaObtenida = {      
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaObtenida);
  }

  return(
    <form className="tarea-formulario" onSubmit={enviarEnvio}>
      <input 
        type="text"
        className="tarea-input"
        placeholder="Escribe tarea"
        name="texto"
        onChange={obtenerEnvio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario;