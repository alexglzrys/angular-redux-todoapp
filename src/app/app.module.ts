import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // Quizá más adelante el módulo principal haga uso de formularios reactivos,
    // Por el momento solo el módulo de todos los necesita, es por ello que se debe especificar la importación en el módulo pertinente
    ReactiveFormsModule,
    TodosModule,
    // Especificar los estados y sus respectivos reducers
    StoreModule.forRoot({todos: todoReducer}),
    // Activar las Redux DevTools para inspección a nivel de desarrollo
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
