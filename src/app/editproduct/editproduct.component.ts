import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdcuctService } from '../services/prodcuct.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  id: number;
  product: Product;
  

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProdcuctService) {
    
   }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe((data) => {
      this.product = data
    }, (error) => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.id,this.product);
    this.product = new Product();
    this.router.navigateByUrl('/home');
  }

}
