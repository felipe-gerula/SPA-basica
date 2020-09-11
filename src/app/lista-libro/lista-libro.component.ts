import { Component, OnInit } from '@angular/core';
import {Libro} from '../models/libro.model';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros : Libro[];

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
  }
}
