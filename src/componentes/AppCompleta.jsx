import React from "react";
import { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tareas from "./Tareas";
import "../css/AppCompleta.css"

function AppCompleta() {
  const [tareas, ponerTarea] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto) {
      tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      ponerTarea(tareasActualizadas);
    } else {
      console.log("No hay nada");
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    ponerTarea(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    ponerTarea(tareasActualizadas);
  };

  return (
    <>
      <div className="contenedor-app">
        <div className="titulo">Tareas</div>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="contenedor-tareas">
          {tareas.map((tarea) => (
            <Tareas
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              eliminarTarea={eliminarTarea}
              completada={tarea.completada}
              completarTarea={completarTarea}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AppCompleta;
