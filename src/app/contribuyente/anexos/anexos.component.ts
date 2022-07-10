import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { postpersona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.css']
})
export class AnexosComponent implements OnInit {

  persona: any[] = [];
  updpersona = new postpersona;
  images: string[];

  @ViewChildren("Pdf")
  pdfs!: QueryList<any>;

  @ViewChild("mostrador", {
    read: ElementRef
  }) mostrador?: ElementRef;

  constructor(private renderer: Renderer2,
    private storage: Storage,
    private perServ: personaService) {
    this.images = [];
  }

  ngOnInit(): void {
    this.retornarid();
    this.updurl()
  }

  updurl() {
    var idpersona = sessionStorage.idpersona
    this.updpersona.url = "urlfrontend2.com"
    this.perServ.updurl(idpersona, this.updpersona).subscribe(data => {
      console.log(data)
      console.log(this.updpersona)
    })
  }
  retornarid() {
    var ruc = sessionStorage.ruc
    var numdoc = sessionStorage.numdoc
    this.perServ.retornarid(ruc, numdoc).subscribe(data => {
      this.persona = data;
      // console.log(this.persona)
      var id = Object.values(this.persona[0])
      // console.log(id)
      sessionStorage.idpersona = id
    })
  }
  mostrarPDF(num: number) {
    let pdffile = this.pdfs.get(num).nativeElement.files;

    // conversión de la variable pdffile a tipo Blob
    var blob = new Blob(pdffile, { type: 'application/pdf' })

    // creación de un objeto URL (que es basicamente la creación del URL del PDF)
    let pdfurl = URL.createObjectURL(blob);

    // crea el atributo 'src' en el elemento con etiqueta 'mostrador' y le da el valor 'pdfurl'
    this.renderer.setAttribute(this.mostrador?.nativeElement, 'src', pdfurl);


  }
  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then()
      .catch(error => console.log(error));
  }
  mostrarInfo(num: number) {
    switch (num) {
      case 1:
        Swal.fire({
          title: 'Anexo 1 <br> <h5 style="margin-top:13px;">Nombre del anexo</h5>',
          icon: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo ipsum. Nulla diam purus, interdum eget pretium vitae, dignissim non nisl. Nam nec commodo magna, eu sodales nibh.'
        })
        break;

      case 2:
        Swal.fire({
          title: 'Anexo 2 <br> <h5 style="margin-top:13px;">Nombre del anexo</h5>',
          icon: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo ipsum. Nulla diam purus, interdum eget pretium vitae, dignissim non nisl. Nam nec commodo magna, eu sodales nibh.'
        })
        break;

      case 3:
        Swal.fire({
          title: 'Anexo 3 <br> <h5 style="margin-top:13px;">Nombre del anexo</h5>',
          icon: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo ipsum. Nulla diam purus, interdum eget pretium vitae, dignissim non nisl. Nam nec commodo magna, eu sodales nibh.'
        })
        break;

      case 4:
        Swal.fire({
          title: 'Anexo 4 <br> <h5 style="margin-top:13px;">Nombre del anexo</h5>',
          icon: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo ipsum. Nulla diam purus, interdum eget pretium vitae, dignissim non nisl. Nam nec commodo magna, eu sodales nibh.'
        })
        break;

      case 5:
        Swal.fire({
          title: 'Anexo 5 <br> <h5 style="margin-top:13px;">Nombre del anexo</h5>',
          icon: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo ipsum. Nulla diam purus, interdum eget pretium vitae, dignissim non nisl. Nam nec commodo magna, eu sodales nibh.'
        })
        break;

      default:
        break;
    }
  }

}

