import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  // Por defecto el checkedAll está desactivado
  completado: boolean = false;

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
  }

  toggleAllStatus() {
    // El usuario completo o descompleto todas las tareas
    this.completado = !this.completado;
    // Despachar la acción en el store
    this.store.dispatch(toggleAll({status: this.completado}));
  }
}
