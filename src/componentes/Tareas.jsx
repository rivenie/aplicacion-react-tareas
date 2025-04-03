import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "../css/Tareas.css"

function Tareas({id, texto, eliminarTarea, completarTarea, completada}){  

  return(
    <div className={completada ? "tarea-agregada completada" : "tarea-agregada"} >
      <div className="tarea" onClick={()=>completarTarea(id)}>{texto}</div>
      <div className="icono-cerrar" onClick={()=>eliminarTarea(id)}><AiFillCloseSquare/></div>
    </div>
    
  )
}

export default Tareas;