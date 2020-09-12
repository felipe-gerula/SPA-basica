import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from "@angular/router";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { StoreModule as NgRxStoreModule , ActionReducerMap} from "@ngrx/store";
import { EffectsModule} from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';

import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { FormLibroComponent } from './form-libro/form-libro.component';
import { LibroState , reducerLibros , initializeLibroState, LibroEffects} from "./models/libro-state.model";

const routes : Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path: "home",component: ListaLibroComponent},
  {path: "libro",component: LibroDetalleComponent},
]; 

//redux init
export interface AppState {
  libros: LibroState;
} 

const reducers : ActionReducerMap<AppState> = {
  libros: reducerLibros 
}

let reducersInitialState = {
  libros: initializeLibroState()
}

//redux fin init

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    ListaLibroComponent,
    LibroDetalleComponent,
    FormLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([LibroEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
