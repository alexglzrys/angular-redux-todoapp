import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppSate } from '../../app.reducer';
import { editar, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo
  // Referencia al control de formulario de edición para establecer el foco al momento de editar
  @ViewChild('inputEdit') inputEdit!: ElementRef;

  chkCompletado!: FormControl;
  txtEditInput!: FormControl;

  editando: boolean = false;

  // Inyectar el Store
  constructor(private store: Store<AppSate>) {

  }

  ngOnInit(): void {
    // Configurar controles de formulario reactivos con base al estado del todo actual
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEditInput = new FormControl(this.todo.texto, Validators.required);

    // Reaccionar a los cambios del checkbox para saber si un todo esta o no completado
    this.chkCompletado.valueChanges.subscribe(newValue => {
      // Disparar la acción que alterna la propiedad completado de un Todo
      this.store.dispatch(toggle({id: this.todo.id}));
    })
  }

  editar() {
    this.editando = true;
    // Si borramos el contenido de la caja, no se dispara la acción para actualizar el todo, pero el valor almacenado en la caja si (lo perdemos).
    this.txtEditInput.setValue(this.todo.texto);

    setTimeout(() => {
      // Seleccionar el contenido del elemento para una facil edición
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    // Validar que el todo sea válido y tenga un titulo diferente al actual para editar
    if (this.txtEditInput.invalid) return;
    if (this.txtEditInput.value === this.todo.texto) return;

    // Despachar la acción para cambiar el texto del todo seleccionado
    this.store.dispatch(editar({id: this.todo.id, texto: this.txtEditInput.value}));
  }

}
