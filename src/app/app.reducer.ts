import { Todo } from './todos/models/todo.model';

// Definir la estructura del estado global de la aplicación
export interface AppSate {
  todos: Todo[]
}
