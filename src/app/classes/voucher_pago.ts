import { persona } from "./persona";
import { tipo_riesgo } from "./tipo_riesgo";

export class voucher_pago {
    idvoucher?: number;
    fecha?: string;
    idtipo_riesgo?: tipo_riesgo;
    idpersona?: persona;
}