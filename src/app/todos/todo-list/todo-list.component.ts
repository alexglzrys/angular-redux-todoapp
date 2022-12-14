import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppSate } from '../../app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    // Cada vez que suceda un cambio, la suscripción nos avisará actualizando el listado de todos
    // this.store.select('todos').subscribe(todos => this.todos = todos);

    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    })
  }

}
