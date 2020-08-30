export class Libro{
    nombre : string;
    autor : string;
    imagenUrl : string;

    constructor( n : string ,a: string, i : string){
        this.nombre = n;
        this.autor = a;
        this.imagenUrl = i;
    }
}