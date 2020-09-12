import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppModule, AppState } from '../app.module';
import { VoteDownAction, VoteUpAction } from '../models/libro-state.model';
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

  constructor(private store: Store<AppState>) { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.libro);
    return false;
  }

  voteUp(){
    // this.store.dispatch(new VoteUpAction(this.libro));
    this.libro.voteUp();
    return false;
  }

  voteDown(){
    // this.store.dispatch(new VoteDownAction(this.libro));
    this.libro.voteDown();
    return false;
  }

  reset(){
    this.libro.reset();
    return false;
  }
}
