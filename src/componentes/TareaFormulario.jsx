import React, {useState} from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import {v4 as uuidv4} from "uuid";

  /*
  3.
  manejarEnvio: función para poder agregar una tarea al dar clic en el elemento "tarea-boton". Tiene como argumento un evento que se mandará automáticamente cuando ocurra dicho envío.  
  
  manejarCambio: debemos manejar que ocurre cuando cambia el contenido del formulario. Es decir, cuando el usuario está escribiendo debemos indicar que es lo que va a ocurrir. Para esto se trabajará una vez más con "hooks". Se tendrá como valor inicial del primer elemento "input" como vacío. Cuando el usuario escriba en dicho campo de texto se actualizará el valor de "input" a lo que escribió el usuario. 

  Debemos manejar el cambio que habrá cuando el usuario escriba en el cuadro de texto y luego poder crear "tareaNueva" con dicho texto que ingresó el usuario. En el elemento "input" de "tarea-input" se agregará un eventListener llamado "onChange". Dicho evento en input se ejecuta cada vez que el usuario escriba en el cuadro de texto. 

  manejarCambio: luego de crear dicho evento se usará la función "setInput" del hook. Se usará e.target.value. Que quiere decir el valor del elemento actual donde se está ejecutando el evento. En este caso lo que escribió el usuario en la caja de texto que es donde se está ejecutando dicho evento. 

  manejarEnvio: luego de tener el valor de lo que escribió el usuario en el "input" ahora debemo enviar dicho valor con la función manejarEnvio. Dicho evento se ejecutará con el eventListener "onSubmit" del elemento form. Necesitamos que al hacer un "submit" al formulario no se actualice la página. Sino que solo se agregue dichos elementos mientras se hace clic en el botón. Para esto se usa el método e.preventDefault() dentro de la función "manejarEnvío".

  Luego de ello en el objeto "tareaNueva" el valor "texto" se pone el "input" (el cual es el texto de la caja). También se le está dando otro valor al objeto llamado "completada" el cual es "false" como valor inicial.

  Generar id: se genera el id de las tareas con un paquete nuevo. El paquete se llama "uuid". Dicho paquete se usa para crear identificadores únicos. Para instalarlo se escribe en el terminal "npm install uuid". Luego de instalarlo se importa de esta manera: import {v4 as uuidv4} from "uuid". Luego de ser instalado e importado se coloca en el valor de id uuidv4(). 

  Ahora el componente que tenemos se va a pasar al componente "Lista de Tareas". Para poder actualizar dicha lista de tareas que es un array. Se dará un prop. En este caso será ".onSubmit(tareaNueva)". Y el valor lo pasará "ListaDeTareas". (ir ahí)
  */

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);    
  }
  
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva ={
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario