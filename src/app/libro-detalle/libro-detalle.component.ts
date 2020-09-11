import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../models/libro.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
}
