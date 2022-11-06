import { createAction, props } from '@ngrx/store';

// La acción de crear una tarea, requiere el titulo de la tarea
export const crear = createAction('[Todo] Crear', props<{texto: string}>())
