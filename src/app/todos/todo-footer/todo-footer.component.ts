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

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    // Suscribirme y reaccionar si el filtro cambia
    this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
  }

  cambiarFiltro(nuevo_filtro: filtrosValidos) {
    // Despachar acción para cambiar el filtro seleccionado
    this.store.dispatch(setFiltro({filtro: nuevo_filtro}));
  }

}
