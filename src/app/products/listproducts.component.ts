import { Component, OnInit } from '@angular/core';
import { ProdcuctService } from '../services/prodcuct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent  {
  

  constructor(public productService: ProdcuctService, private router: Router) {
   
  }

  public deleteProduct(id) {
    this.productService.deleteProduct(id);
    window.location.reload();
  }

  updateProduct(id: number){
    this.router.navigate(['update', id]);
    
  }
  
}
