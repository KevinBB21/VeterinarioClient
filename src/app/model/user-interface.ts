import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";

export interface IUsertype {
    id: number;
    name: string;
    users: number;
}

export interface IUser {
    id: number;
    dni: string;
    name: string;
    surname1: string;
    surname2: string;
    email: string;
    username: string;
    citas: number;
    usertype: IUsertype;
}


export interface IUser2Form {
    id:          FormControl<number>;
    dni:          FormControl<string>;
    name:        FormControl<string>;
    surname1:     FormControl<string>;
    surname2:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    id_usertype:    FormControl<number>;
}
export interface IUser2Send {
    id:          number;
    dni:          string
    name:        string;
    surname1:     string;
    surname2:    string;
    email:       string;
    username:    string;
    usertype:   IEntity;
}