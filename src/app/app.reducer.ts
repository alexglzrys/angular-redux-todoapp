import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { filtrosValidos } from './filtro/filtro.actions';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';

// Definir la estructura del estado global de la aplicación
export interface AppSate {
  todos: Todo[],
  filtro: filtrosValidos
}

// Definir los reducer involucrados en todo el store de mi aplicacación e indicarselo al módulo principal
export const appReducers: ActionReducerMap<AppSate> = {
  todos: todoReducer,
  filtro: filtroReducer,
}

