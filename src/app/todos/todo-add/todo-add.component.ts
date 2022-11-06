import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppSate } from '../../app.reducer';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput!: FormControl;

  // Inyectar el Store en este componente
  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    // Configurar un campo de formulario reactivo
    this.txtInput = new FormControl('', Validators.required)
  }

  agregar():void {
    // Validar el input
    if (this.txtInput.invalid) return;

    // Almacenar la nueva tarea en el store
    this.store.dispatch(crear({texto: this.txtInput.value}));
    // Resetear el campo de formulario
    this.txtInput.reset();
  }

}
