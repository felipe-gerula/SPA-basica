import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../models/libro.model';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map , filter , debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<Libro>;

  fg: FormGroup;

  minLongitud = 3;

  searchResults: string[];

  constructor(fb : FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ["",Validators.compose([
        Validators.required,
        this.nombreValidatorParametrizable(this.minLongitud),
      ])],
      autor: ["",Validators.required],
      imagenUrl: [""]
    });
  }

  ngOnInit(): void {
    let elemNombre = <HTMLInputElement>document.getElementById("nombre");
    fromEvent(elemNombre,"input")
    .pipe(
      map((e:KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ajax("/assets/datos.json"))
    ).subscribe(AjaxResponse => {
      this.searchResults = AjaxResponse.response;
    });
  }

  guardar(nombre: string ,autor: string, imagenUrl: string ): boolean{
    let d = new Libro(nombre , autor ,imagenUrl );
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidatorParametrizable(minLong : number):ValidatorFn{
      return (control:FormControl) : {[s:string]:boolean} | null => {
        let l = control.value.toString().trim().length;
        if (l>0 && l < minLong) {
            return {minLongNombre : true};
        }
        return null;
      }
  }

}
