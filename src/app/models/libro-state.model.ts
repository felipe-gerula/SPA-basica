import { Injectable } from "@angular/core";
import { Effect, ofType , Actions} from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable  , of} from "rxjs";
import { map } from "rxjs/operators";

import { Libro } from "./libro.model";

//ESTADO
export interface LibroState{
    items : Libro[];
    loading : boolean;
    favorito : Libro;
};

export const initializeLibroState = function () {
    return{
        items: [],
        loading: false,
        favorito: null
        };
};

//ACCIONES
export enum LibrosActionTypes{
    NUEVO_LIBRO = "[Libros] Nuevo",
    ELEGIDO_FAVORITO = "[Libros] Favorito",
    VOTE_UP = "[Libros] Vote Up",
    VOTE_DOWN = "[Libros] Vote Down"
    
}

export class NuevoLibroAction implements Action{
    type = LibrosActionTypes.NUEVO_LIBRO;
    constructor(public libro : Libro){};
}

export class ElegidoFavoritoAction implements Action{
    type = LibrosActionTypes.ELEGIDO_FAVORITO;
    constructor(public libro : Libro){};
}

export class VoteUpAction implements Action{
    type = LibrosActionTypes.VOTE_UP;
    constructor(public libro : Libro){};
}

export class VoteDownAction implements Action{
    type = LibrosActionTypes.VOTE_DOWN;
    constructor(public libro : Libro){};
}

export type LibrosActions = NuevoLibroAction | ElegidoFavoritoAction
 | VoteUpAction | VoteDownAction;


//REDUCERS
export function reducerLibros(
    state : LibroState,
    action : LibrosActions
):LibroState{
    switch (action.type) {
        case LibrosActionTypes.NUEVO_LIBRO:{
            return{
                ...state,
                items: [...state.items,(action as NuevoLibroAction).libro]
            };
        }
        case LibrosActionTypes.ELEGIDO_FAVORITO:{
            state.items.forEach(x=> x.setSelected(false));
            const fav: Libro = (action as ElegidoFavoritoAction).libro;
            fav.setSelected(true);
            return{
                ...state,
                favorito: fav
            };
        }
        case LibrosActionTypes.VOTE_UP:{
            const l: Libro = (action as VoteUpAction).libro;
            l.voteUp();
            return{...state};
        }
        case LibrosActionTypes.VOTE_DOWN:{
            const l: Libro = (action as VoteDownAction).libro;
            l.voteDown();
            return{...state};
        }
    }
    return state;
}

//EFFECTS
@Injectable()
export class LibroEffects {
    @Effect()
    nuevoAgregado$: Observable<Action> = this.actions$.pipe(
        ofType(LibrosActionTypes.NUEVO_LIBRO),
        map((action: NuevoLibroAction) => new  ElegidoFavoritoAction(action.libro))
    )

    constructor(private actions$: Actions){}
}