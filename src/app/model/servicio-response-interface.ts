import { ITiposervicio } from "./servicio-interface";
import { Pageable, Sort } from "./shared-interface";
import { Tiposervicio } from "./tiposervicio-response-interface";

export interface ServicioResponse {
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

export interface Servicio {
    id:         number;
    nombre:       string;
    precio:      number;
    imagen:      number;
    descripcion:    string;
    tiposervicio: ITiposervicio;
    servicios: number;
}

