import React, {useState} from "react";
import "../hojas-de-estilo/ListaDeTareas.css"
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

/*
1. 
  Mostrar una lista de componentes de react:
  Se va a renderizar varios componentes Tarea.jsx. Cada una de ellas tendrá sus propios valores prop. 
  Se abren llaves {} porque se va a necesitar un arreglo de js. 
  Se toma el arreglo "tareas" que es el primer valor de useState el cual cambiará de valor y tiene como valor inicial un arreglo vacio. Lo que hay dentro de "tareas" es el objeto que está en el componente "TareaFormulario". 
  Cada vez que se ejecute la función de "submit" se renderízará y actualizará el valor de "tareas" aumentando o restando objetos.
  Luego de llamar al arreglo se llama a la función "map". Para tener tareas.map().
  map: es un método que tomará cada uno de los objetos que tenga el array "tareas" y los actualizará agregando o restando elementos. 
  Para cada objeto el callback "tarea" representa el objeto actual que se está procesando.  
  Luego se crea un componente "Tarea" para cada uno de esos objetos que se está pasando en el callback. Esos datos de el objeto actual se usará para crear un componente y llenar los props. En este caso se está pasando el id, texto y completada. Los demás props se rellenarán con otros datos. Cada vez que se haga submit en el formulario y se actualize el valor de "tareas" con la función "agregarTarea" se añade una componente más de "Tarea.jsx".

4.
  TareaFormulario: se añadirá el prop "onSubmit" y se le dará el valor de la función "agregarTarea". Recordar que la función onSubmit se ejecuta cuando el formulario se envía. Es decir, que al enviar el formulario se llamará a la función "agregarTarea". 

  Comunicación entre los componentes: se está pasando la función "agregarTarea" al componente "TareaFormulario" a través de un hook. Luego el "TareaFormulario" a través de los props está dandole el valor al parámetro "tarea" con "tareaNueva" (objeto creado en TareaFormulario). Es decir ahora "tarea" es "tareaNueva". 

  agregarTarea: ponemos un condicional para saber si la tarea no es null. trim() es una método para saber los espacios que hay en una cadena de texto. Si es 0 es porque es porque no hay ningun caracter. Al no haber ningún caracter retorna false. Si es más de 1 es true ya que si retorna caracteres. Este método es como los que deben de retornar falsy o truly acorde si está vacío o no.De esta manera se confirmará que la cadena no está vacía. Luego para quitarle los espacios usamos el mismo trim(). Para colocar una tarea nueva al principio se crea la variable "tareasActualizadas" y se incluye dentro al inicio "tarea" . Luego tomamos todas las tareas anteriores y con el operador spread(...) se añaden las demás tareas incluidos en "tareas".

  Operador spread: El operador spread en JavaScript, representado por tres puntos (...), es una sintaxis que permite expandir o descomponer elementos de un iterable (como un array o un objeto) en lugares donde se esperan múltiples elementos o propiedades. Es muy útil para copiar y combinar arrays u objetos de manera más fácil y legible. Ejemplos:
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1]; // arr2 será [1, 2, 3]

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2]; // arr3 será [1, 2, 3, 4, 5, 6]

  Cuando se muestra una lista en react como en "tareas-lista-contenedor" para que react sepa el orden y no los cambie al actualizarlos. Se debe pasar un atributo llamado "key". 

  eliminarTarea: se crea una constante igual que en la función de agregarTarea. Esta función filtra una tarea especifica de todas las "tareas". Esto se logra con el método .filter. El que cumpla la condición que está dentro de los paréntesis es la tarea que se incluirá en "tareas". 
  
  tareas.filter(): aquí se está utilizando el método .filter() en el array "tareas" para crear un nuevo array basado en una condición.
  tarea => ...: esta parte utiliza una función de flecha para definir la función de callback y "tarea" es el nombre que se le da a cada elemento del array mientras se itera sobre él. En este contexto, tarea representa un objeto de tarea individual en el array.
  tarea.id !== id: aquí se está evaluando cada tarea. La condición que se está verificando es si todos los tarea.id de todas las tareas es diferente (!==) del id (el tarea.id de la tarea seleccionada) entonces no se incluye en "tareas";
*/
function ListaDeTareas (){
  const[tareas, setTareas]=useState([]);
  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.text = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);    
    } 
  }

  const eliminarTarea = id =>{    
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);    
    setTareas(tareasActualizadas);        
  }

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }
  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }        
      </div>
    </>
  )
}
export default ListaDeTareas;