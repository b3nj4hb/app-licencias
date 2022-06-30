import { Component, OnInit } from '@angular/core';
import { Storage, ref ,uploadBytes } from '@angular/fire/storage'; 
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit(): void {
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
