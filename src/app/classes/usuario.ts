import { persona } from "./persona";
import { rol } from "./rol";

export class usuario {
    idusuario?: number;
    user?: string;
    password?: string;
    idrol?: rol;
    idpersona?: persona;
}