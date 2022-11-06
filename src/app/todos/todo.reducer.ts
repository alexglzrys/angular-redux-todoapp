import { createReducer, on } from "@ngrx/store";
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  // Prevenir la mutación del arreglo de tareas (objetos y arreglos son pasados por referencia en JS)
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);
