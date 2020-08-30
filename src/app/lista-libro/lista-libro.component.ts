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

  guardar(nombre : string , url : string ,autor : string):boolean{
    this.libros.push(new Libro(nombre,autor,url));
    console.log(this.libros);
    return false;
  }
}
