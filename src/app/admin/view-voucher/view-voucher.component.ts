import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Storage, ref,listAll, getDownloadURL, uploadBytes } from '@angular/fire/storage';
@Component({
  selector: 'app-view-voucher',
  templateUrl: './view-voucher.component.html',
  styleUrls: ['./view-voucher.component.css']
})
export class ViewVoucherComponent implements OnInit {

  images: string [];
  @ViewChildren("Pdf")
  pdfs!: QueryList<any>;

  @ViewChild("mostrador", {
    read: ElementRef
  }) mostrador?: ElementRef;
  constructor(private renderer: Renderer2 ,private storage: Storage ){
    this.images=[];
  }

  ngOnInit() {
    this.getImages();
  }
  mostrarPDF(num:number){
    let pdffile = this.pdfs.get(num).nativeElement.files;

    // conversión de la variable pdffile a tipo Blob
    var blob = new Blob(pdffile,{type: 'application/pdf'})

    // creación de un objeto URL (que es basicamente la creación del URL del PDF)
    let pdfurl = URL.createObjectURL(blob);

    // crea el atributo 'src' en el elemento con etiqueta 'mostrador' y le da el valor 'pdfurl'
    this.renderer.setAttribute(this.mostrador?.nativeElement,'src',pdfurl);
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
  
}
