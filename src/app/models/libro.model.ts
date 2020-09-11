export class Libro{
    nombre : string;
    autor : string;
    imagenUrl : string;
    private selected : boolean;
    public info : string[];
    constructor( n : string ,a: string, i : string){
        this.nombre = n;
        this.autor = a;
        this.imagenUrl = i;
        this.info = ["tapa dura","papel ecologico"];
    }

    isSelected():boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}
