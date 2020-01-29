import { Component, OnInit } from '@angular/core';
import { ProdcuctService } from '../services/prodcuct.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {

  

  constructor(public productService: ProdcuctService) { }

  public deleteProduct(id) {
    this.productService.deleteProduct(id);
  }

}
