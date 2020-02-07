import { Component } from '@angular/core';
import { ProdcuctService } from '../services/prodcuct.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {


  constructor(private productsService: ProdcuctService) { }

  product: Product = new Product();


  add() {
    this.productsService.addProduct(this.product, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    this.product = new Product();
    window.location.reload();
  }


}
