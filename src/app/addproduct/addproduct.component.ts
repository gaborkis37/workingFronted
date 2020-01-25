import { ProdcuctService } from '../prodcuct.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {


  constructor(private productsService: ProdcuctService) { }

  name: string;
  price: string;


  add() {
    this.productsService.addProduct(this.name, this.price, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    this.name = '';
    this.price = '';
  }

  addAndLoad() {
    this.productsService.addProduct(this.name, this.price, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    this.name = '';
    this.price = '';
    this.productsService.load();
  }

}
