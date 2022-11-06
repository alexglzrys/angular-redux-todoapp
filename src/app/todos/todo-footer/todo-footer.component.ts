import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { setFiltro } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    // Suscribirme y reaccionar si el filtro cambia
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);

    /**
     * * La ventaja del patrón REDUX es que no necesito preocuparme dónde se dispara la acción que ocasiona que el estado cambie
     * * Solo es cuestion de suscribirme y en automático me notifica que ha cambiado para reaccionar en consecuencia.
     */

    // Necesito suscribirme y estar atento a todo el store para reaccionar a ciertos cambios
    this.store.subscribe(store => {
      // Conocer que filtro está activado en este momento
      this.filtroActual = store.filtro;
      // Conocer cuantas tareas pendientes tengo
      this.pendientes = store.todos.filter(todo => !todo.completado).length
    })
  }

  cambiarFiltro(nuevo_filtro: filtrosValidos) {
    // Despachar acción para cambiar el filtro seleccionado
    this.store.dispatch(setFiltro({filtro: nuevo_filtro}));
  }

}
