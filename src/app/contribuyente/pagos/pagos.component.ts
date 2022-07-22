import { Component, OnInit } from '@angular/core';
import { Storage, ref ,uploadBytes } from '@angular/fire/storage'; 
import { tipo_riesgo, voucher_pago } from 'src/app/classes/classes';
import { tipoRiesgoService } from 'src/app/services/tipoRiesgo.service';
import { voucherPagoService } from 'src/app/services/voucherPago.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  tipo_riesgo: any[] = [];
  user: any;

  voucher: voucher_pago = new voucher_pago();
  voucher2: voucher_pago = new voucher_pago();

  constructor(private storage: Storage, private tipriserv: tipoRiesgoService, private voucherp: voucherPagoService, private voucherp2: voucherPagoService) { }

  ngOnInit(): void {
    this.listarTiporiesgo();
  }
  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage,`images/${file.name}`);
    
    uploadBytes(imgRef, file)
    .then()
    .catch(error => console.log(error));
  }

  listarTiporiesgo() {
    this.tipriserv.list().subscribe(data => {
      this.tipo_riesgo = data;
    })
  }

  crearVoucherInsp(){
    this.user = localStorage.getItem("user");
    let newuser = JSON.parse(this.user);

    this.voucher.idpersona = newuser.idper;

    this.voucherp.save(this.voucher).subscribe(

    );
  }

  crearVoucherLic(){
    this.user = localStorage.getItem("user");
    let newuser = JSON.parse(this.user);

    this.voucher2.idpersona = newuser.idper;
    this.voucher2.idtipo_riesgo = undefined;

    this.voucherp2.save(this.voucher2).subscribe(

    );
  }

  finalizar(){
    this.crearVoucherInsp()
    this.crearVoucherLic();
    Swal.fire('Proceso finalizado', `Su solicitud y requisitos han sido enviados correctamente`, 'success')
  }
}
