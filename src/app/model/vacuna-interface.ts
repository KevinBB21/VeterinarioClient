import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";

export interface ITipoanimal {
    id: number;
    tipo: string;
    animales: number;
}

export interface IVacuna {
    id: number;
    nombre: string;
    tipoanimal: ITipoanimal;
}


export interface IVacuna2Form {
    id:          FormControl<number>;
    nombre:          FormControl<string>;
    id_tipoanimal:    FormControl<number>;
}
export interface IVacuna2Send {
    id:          number;
    nombre:          string
    tipoanimal:   IEntity;
}