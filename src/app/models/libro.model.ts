export class Libro{
    nombre : string;
    autor : string;
    imagenUrl : string;
    votes: number;
    private selected : boolean;
    public info : string[];
    constructor( n : string ,a: string, i : string, v : number){
        this.nombre = n;
        this.autor = a;
        this.imagenUrl = i;
        this.info = ["tapa dura","papel ecologico"];
        this.votes = v;
    }

    isSelected():boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }

    voteUp(){
         this.votes = this.votes + 1;
    }

    voteDown(){
        this.votes = this.votes - 1;
   }
   reset(){
       this.votes = 0;
   }
}
