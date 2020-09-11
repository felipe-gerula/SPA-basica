import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from "@angular/router";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';

import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { FormLibroComponent } from './form-libro/form-libro.component';

const routes : Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path: "home",component: ListaLibroComponent},
  {path: "libro",component: LibroDetalleComponent},
]; 

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
