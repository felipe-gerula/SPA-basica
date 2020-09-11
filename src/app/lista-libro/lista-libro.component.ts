import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {Libro} from '../models/libro.model';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros : Libro[];
  current: Subject<Libro> = new BehaviorSubject<Libro>(null);
  constructor() {this.libros = [] }

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
