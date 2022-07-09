export class departamento {
    iddepartamento?: number;
    nombre?:string;
}

export class distrito {
    iddistrito?: number;
    nombre?: string;
    idprovincia?: provincia;
}

export class localidad {
    idlocalidad?: number;
    referencia?: string;
    direccion?: string;
    iddistrito?: distrito;
}

export class persona_localidad {
    idpersona?: persona;
    idlocalidad?: localidad;
}

export class postpersona {
    idpersona?: number;
    idtipo_persona?: number;
    nombre?: string;
    ape_pat?: string;
    ape_mat?: string;
    idtipo_documento?: number;
    num_documento?: string;
    ruc?: string;
    correo?: string;
    direccion_notificacion?: string;
    telefono?: number;
}

export class persona {
    idpersona?: number;
    idtipo_persona: tipo_persona = new tipo_persona;
    nombre?: string;
    ape_pat?: string;
    ape_mat?: string;
    idtipo_documento: tipo_documento = new tipo_documento;
    num_documento?: string;
    ruc?: string;
    correo?: string;
    direccion_notificacion?: string;
    telefono?: number;
}

export class provincia {
    idprovincia?: number;
    nombre?: string;
    iddepartamento?: departamento;
}

export class rol {
    idrol?: number;
    rol?: string;
}

export class tipo_documento {
    idtipo_documento?: number;
    tipo_documento?: string;
}

export class tipo_persona {
    idtipo_persona?: number;
    tipo_persona?: string;
}

export class tipo_riesgo {
    idtipo_riesgo?: number;
    tipo_riesgo?: string;
}

export class usuario {
    idusuario?: number;
    user?: string;
    password?: string;
    idrol?: rol;
    idpersona?: persona;
}

export class voucher_pago {
    idvoucher?: number;
    fecha?: string;
    idtipo_riesgo?: tipo_riesgo;
    idpersona?: persona;
}