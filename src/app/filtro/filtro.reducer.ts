import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

// Tengo que especificar el tipo de dato que recibe el reducer, dado que es un tipo personalizado
export const filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  // Establecer el filtro al nuevo valor seleccionado
  on(setFiltro, (state, { filtro }) => filtro),
);
