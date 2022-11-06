import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() {

  }

  ngOnInit(): void {
    // Configurar controles de formulario reactivos con base al estado del todo actual
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEditInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      // Seleccionar el contenido del elemento para una facil edición
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }

}
