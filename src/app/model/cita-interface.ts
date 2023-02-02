import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";
import { IServicio } from "./servicio-interface";
import { IUser } from "./user-interface";

export interface ITipoanimal {
    id: number;
    tipo: string;

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
}

export interface ICita {
    id: number;
    fecha: string;
    pagado: number;
    animal: IAnimal;
    servicio: IServicio;
    user: IUser;
}


export interface ICita2Form {
    id:          FormControl<number>;
    fecha:          FormControl<string>;
    pagado:        FormControl<number>;
    id_animal:    FormControl<number>;
    id_servicio:    FormControl<number>;
    id_user:    FormControl<number>;
}
export interface ICita2Send {
    id:          number;
    fecha:          string
    pagado:        number;
    animal:   IEntity;
    servicio:   IEntity;
    user:   IEntity;
}