import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";

export interface ITiposervicio {
    id: number;
    name: string;
    servicios: number;
}

export interface IServicio {
    id: number;
    nombre: string;
    precio: number;
    imagen: number;
    descripcion: string;
    tiposervicio: ITiposervicio;
}


export interface IServicio2Form {
    id:          FormControl<number>;
    nombre:          FormControl<string>;
    precio:        FormControl<number>;
    imagen:     FormControl<number>;
    descripcion:    FormControl<string>;
    id_tiposervicio:    FormControl<number>;
}
export interface IServicio2Send {
    id:          number;
    nombre:          string
    precio:        number;
    imagen:     number;
    descripcion:    string;
    tiposervicio:   IEntity;
}