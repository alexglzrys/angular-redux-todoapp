import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, eliminar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  // Prevenir la mutación del arreglo de tareas (objetos y arreglos son pasados por referencia en JS)
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  // Prevenir la mutación de los objetos todo
  // ! Una forma primitiva de saber si hay mutación, es revisar el inspector de Redux DevTools, navegar en el tiempo, y si no hay cambios, significa que estamos mutando el estado
  on(toggle, (state, { id }) => {
    // Mapear el arreglo en busca del Todo a invertir su estado de completado
    return state.map(todo => {
      if (todo.id === id) {
        // Devolver un nuevo objeto con los cambios de ese Todo, evitando su mutación
        return {...todo, completado: !todo.completado}
      }
      return todo;
    })
  }),
  // Cambiar el texto del todo seleccionado
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {...todo, texto};
      }
      return todo;
    })
  }),
  // Borrar el todo seleccionado | Filter nos retorna un nuevo arreglo con los datos que cumplen la condición
  on(eliminar, (state, { id }) => state.filter(todo => todo.id !== id)),
  // Modificar el status de completado a todos los elementos de la lista, cuidar de no mutar el objeto
  on(toggleAll, (state, { status }) => state.map(todo => ({...todo, completado: status }))),
  // Filtrar todas las tareas que esten completadas (solo me interesan las tareas que no estén completadas)
  on(limpiarCompletados, (state) => state.filter(todo => !todo.completado))
);
