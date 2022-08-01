import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Storage, ref,listAll, getDownloadURL, uploadBytes } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { persona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-view-voucher',
  templateUrl: './view-voucher.component.html',
  styleUrls: ['./view-voucher.component.css']
})
export class ViewVoucherComponent implements OnInit {
  tittle = 'envioCorreos';
  persona: persona[] = [];
  images: string [];
  @ViewChildren("Pdf")
  pdfs!: QueryList<any>;

  @ViewChild("mostrador", {
    read: ElementRef
  }) mostrador?: ElementRef;
  constructor(private renderer: Renderer2 ,private storage: Storage, private perService: personaService, private httpclient:HttpClient){
    this.images=[];
    this.datos = new FormGroup({
      correo: new FormControl ('', [Validators.required, Validators.email])
    })
  }

  enviarCorreo(){
    let params = {
      email: this.datos.value.correo
    }
    console.log(params)
    this.httpclient.post('http://localhost:3000/envio',params).subscribe(resp =>{
      console.log(resp)
    })
  }

  ngOnInit() {
    this.getImages();
    this.listarPersona();
  }
  mostrarPDF(num:number){
    let pdffile = this.pdfs.get(num).nativeElement.files;

    // conversión de la variable pdffile a tipo Blob
    var blob = new Blob(pdffile,{type: 'application/pdf'})

    // creación de un objeto URL (que es basicamente la creación del URL del PDF)
    let pdfurl = URL.createObjectURL(blob);

    // crea el atributo 'src' en el elemento con etiqueta 'mostrador' y le da el valor 'pdfurl'
    this.renderer.setAttribute(this.mostrador?.nativeElement,'src',"https://firebasestorage.googleapis.com/v0/b/storage-voucher.appspot.com/o/images%2FAnalisis%20de%20la%20cruz%20de%20malta%20(1).pdf?alt=media&token=3556d20c-a72e-4f20-b8c4-5ba3d4f44688");
  }
  getImages(){
    const imagesRef =ref(this.storage, 'images');
    listAll(imagesRef)
    .then(async response =>{
      console.log(response);
      this.images=[];
      for (let item of response.items){
        const url = await getDownloadURL(item);
        this.images.push(url)
        console.log(url)
      }
    })
    .catch(error => console.log(error))
  }
  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage,`images/${file.name}`);
    
    uploadBytes(imgRef, file)
    .then()
    .catch(error => console.log(error));
  }
  listarPersona() {
    this.perService.list().subscribe(data => {
      this.persona = data;
      console.log(this.persona)
    })
  }

  datos:FormGroup;
  
}
