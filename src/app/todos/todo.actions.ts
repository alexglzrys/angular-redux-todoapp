import { createAction, props } from '@ngrx/store';

// La acción de crear una tarea, requiere el titulo de la tarea
export const crear = createAction('[Todo] Crear', props<{texto: string}>());
// Acción que cambia una tarea específica - de completado a no completado y viceversa
export const toggle = createAction('[Todo] Toggle', props<{id: number}>());
// Acción para actualizar el titulo de la tarea
export const editar = createAction('[Todo] Editar', props<{id: number, texto: string}>());
