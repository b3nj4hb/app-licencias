import { tipo_documento } from "./tipo_documento";
import { tipo_persona } from "./tipo_persona";

export class persona {
    idpersona?: number;
    idtipo_persona?: tipo_persona;
    nombre?: string;
    ape_pat?: string;
    ape_mat?: string;
    idtipo_documento?: tipo_documento;
    num_documento?: string;
    ruc?: string;
    correo?: string;
    direccion_notificacion?: string;
    telefono?: number;
}