import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Libro} from "../models/libro.model";
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro : Libro; 
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }

  ngOnInit(): void {
  }

}
