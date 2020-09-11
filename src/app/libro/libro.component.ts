import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import {Libro} from "../models/libro.model";
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro : Libro; 
  @Input() position : number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked : EventEmitter<Libro>;

  constructor() { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.libro);
    return false;
  }

}
