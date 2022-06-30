import { Component, OnInit } from '@angular/core';
import { Storage, ref,listAll, getDownloadURL } from '@angular/fire/storage';
@Component({
  selector: 'app-view-voucher',
  templateUrl: './view-voucher.component.html',
  styleUrls: ['./view-voucher.component.css']
})
export class ViewVoucherComponent implements OnInit {

  images: string [];

  constructor(private storage: Storage){
    this.images=[];
  }

  ngOnInit() {
    this.getImages();
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
      }
    })
    .catch(error => console.log(error))
  }
  
}
