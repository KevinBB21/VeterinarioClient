import { FormControl } from "@angular/forms";
import { Usertype } from "./usertype-response-interface";
import { IUsertype } from "./usertype-interface";
import { Pageable, Sort } from "./shared-interface";

export interface IEntity {
    id: number;
}


export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
}







