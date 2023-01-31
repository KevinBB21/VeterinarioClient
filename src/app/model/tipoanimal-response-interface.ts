import { Pageable, Sort } from "./shared-interface";

export interface TipoanimalResponse {
    content:          Tipoanimal[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}

export interface Tipoanimal {
    id:         number;
    tipo:       string;
    animales: number;
}

