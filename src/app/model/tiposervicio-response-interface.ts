import { Pageable, Sort } from "./shared-interface";

export interface TiposervicioResponse {
    content:          Tiposervicio[];
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

export interface Tiposervicio {
    id:         number;
    name:       string;
    servicios: number;
}

