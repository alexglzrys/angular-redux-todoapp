import { createReducer, on } from "@ngrx/store";
import { crear, toggle } from './todo.actions';
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
);
