import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.css']
})
export class AnexosComponent implements OnInit {

  @ViewChildren("Pdf")
  pdfs!: QueryList<any>;

  @ViewChild("mostrador", {
    read: ElementRef
  }) mostrador?: ElementRef;

  constructor(private renderer: Renderer2 ) { 
    
  }

  ngOnInit(): void {
    
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

}

