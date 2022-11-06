import { createAction, props } from '@ngrx/store';

// La acción de crear una tarea, requiere el titulo de la tarea
export const crear = createAction('[Todo] Crear', props<{texto: string}>());
// Acción que cambia una tarea específica - de completado a no completado y viceversa
export const toggle = createAction('[Todo] Toggle', props<{id: number}>());
// Acción para actualizar el titulo de la tarea
export const editar = createAction('[Todo] Editar', props<{id: number, texto: string}>());
// Acción para eliminar un todo
export const eliminar = createAction('[Todo] Eliminar', props<{id: number}>());
// Acción para completar o no completar todos los todos de la lista
export const toggleAll = createAction('[Todo] Toggle All', props<{status: boolean}>());
// Acción para limpiar o borrar todas las tareas completadas
export const limpiarCompletados = createAction('[Todo] Limpiar Tareas Completadas');
