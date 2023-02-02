import { ITipoanimal } from "./animal-interface";
import { Pageable, Sort } from "./shared-interface";
import { Tipoanimal } from "./tipoanimal-response-interface";
import { Tiposervicio } from "./tiposervicio-response-interface";

export interface VacunaResponse {
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

export interface Vacuna {
    id:         number;
    nombre:       string;
    tipoanimal: ITipoanimal;
    vacunas: number;
}

