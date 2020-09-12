import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoLibroAction } from '../models/libro-state.model';
import {Libro} from '../models/libro.model';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  updates: string[];
  libros : Libro[];
  current: Subject<Libro> = new BehaviorSubject<Libro>(null);
  constructor(private store: Store<AppState>) {
    this.libros = [] 
    // this.store.select(state => state.libros.favorito).subscribe(data => {
    //   const fav = data;
    //   if (data != null) {
    //     this.updates.push(data.nombre);
    //   }
    // });
  }

  ngOnInit(): void {
  }

  agregado(l : Libro){
    this.libros.push(l);
    console.log(this.libros);
    return false;
  }

  elegido(l : Libro){
    this.libros.forEach(function (x) {x.setSelected(false);});
    l.setSelected(true);
    this.current.next(l);
  }

  subscribeOnChange(fn){
    this.current.subscribe(fn); 
  }
}
