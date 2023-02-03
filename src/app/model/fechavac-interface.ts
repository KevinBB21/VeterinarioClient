import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";
import { IVacuna } from "./vacuna-interface";
import { IAnimal } from "./cita-interface";

export interface IFechavac {
    id: number;
    fecha_inic: string;
    vacuna: IVacuna;
    animal: IAnimal;
}


export interface IFechavac2Form {
    id:          FormControl<number>;
    fecha_inic:          FormControl<string>;
    id_animal:    FormControl<number>;
    id_vacuna:    FormControl<number>;
}
export interface IFechavac2Send {
    id:          number;
    fecha_inic:          string
    animal:   IEntity;
    vacuna:   IEntity;
}