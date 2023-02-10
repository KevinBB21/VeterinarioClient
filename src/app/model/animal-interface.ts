import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";

export interface ITipoanimal {
    id: number;
    tipo: string;
    animales: number;
}

export interface IAnimal {
    id: number;
    nombre: string;
    color: string;
    raza: string;
    fecha_nac: Date;
    vacunado: number;
    peso: number;
    tipoanimal: ITipoanimal;
    citas: number;
}


export interface IAnimal2Form {
    id:          FormControl<number>;
    nombre:          FormControl<string>;
    color:        FormControl<string>;
    raza:     FormControl<string>;
    fecha_nac:    FormControl<Date>;
    vacunado:    FormControl<number>;
    peso:    FormControl<number>;
    id_tipoanimal:    FormControl<number>;
}
export interface IAnimal2Send {
    id:          number;
    nombre:          string
    color:        string;
    raza:     string;
    fecha_nac:  Date;
    vacunado:     number;
    peso:     number;
    tipoanimal:   IEntity;
}