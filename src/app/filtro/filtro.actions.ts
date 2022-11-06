import { createAction, props } from '@ngrx/store';

// crear un nuevo tipo de dato
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// Acción para filtrar todos
export const setFiltro = createAction('[Filtro] Establecer Filtro', props<{filtro: filtrosValidos}>());

