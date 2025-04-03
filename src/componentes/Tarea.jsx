import React from "react";
import "../hojas-de-estilo/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

/*
2.
  completarTarea: es una función que se va a ejecutar cuando el usuario de clic a "tarea-texto".
  En el elemento "tarea-texto" se está poniendo un onClick y dentro una función anónima la cual llamará a la función "completarTarea" con el parámetro del "id" de la tarea para que sepa que tarea se mostrará como completada de toda la lista de tareas del array "tareas" del componente "ListaDeTareas". 

  eliminarTarea: es una función que se ejecutará cuando se de clic al icono. En "tarea-contenedor-iconos". Tiene la misma lógica de completarTarea. Tiene como parámetro el id para que sepa que objeto del array "tareas" eliminar. 
*/

function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
  return(
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos"
        onClick={()=>eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  )
}

export default Tarea;