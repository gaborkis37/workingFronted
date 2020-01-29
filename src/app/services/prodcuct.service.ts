import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable()
export class ProdcuctService {

  productList: Product[] = [];
  newProduct: Product;

  constructor(private http: HttpClient) { this.getProducts();}

  getProducts() {
    const token = sessionStorage.getItem('jsessionid');
    const tokenJSON = JSON.parse(token);

    if (token != null || tokenJSON.expires_in < new Date().getTime()) {
      const getUsersUrl = 'http://localhost:8080/getProducts';
      const getUsersHeaders: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'Bearer' + tokenJSON.access_token);

      return this.http.post(getUsersUrl, {
        withCredentials: true
      }, {
          headers: getUsersHeaders
        }).subscribe((res) => {
          console.log(res);
          for (let i = 0; ; i++) {
            if (res[i] == null) {
              break;
            }

            this.productList.push(res[i]);
          }
        });

    }

  }

  addProduct(product: Product, token: string) {

    const addProductUrl = 'http://localhost:8080/addProduct';
    
    
    const addProductBody = product;
    
    const addProductHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Bearer' + token);

      const options = {
        headers: addProductHeaders,
        withCredentials: true
      }; 

    return this.http.post(addProductUrl, addProductBody, options).subscribe((data: Product[]) => {
        this.productList = data;
      });

  }

  public deleteProduct(id) {
    const token = sessionStorage.getItem('jsessionid');
    const tokenJSON = JSON.parse(token);

    const deleteProductUrl = 'http://localhost:8080/deleteProduct/' + id;
    const deleteProductHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Bearer' + tokenJSON.access_token);

    const options = {
      headers: deleteProductHeaders,
      withCredentials: true
    }; 

    return this.http.delete(deleteProductUrl, options).subscribe((data: Product[]) => this.productList = data);
  }

  public getProductById(id): Observable<any> {
    const token = sessionStorage.getItem('jsessionid');
    const tokenJSON = JSON.parse(token);

    const findProductUrl = 'http://localhost:8080/getProducts/' + id;
    const findProductHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Bearer' + tokenJSON.access_token);
    
    const options = {
      headers: findProductHeaders,
      withCredentials: true
    };

    return this.http.get(findProductUrl,options);

  }

  public updateProduct(id, product: Product) {
    const token = sessionStorage.getItem('jsessionid');
    const tokenJSON = JSON.parse(token);

    const updateProductUrl = 'http://localhost:8080/updateProduct/' + id;
    const updateProductHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Bearer' + tokenJSON.access_token);

    const options = {
      headers: updateProductHeaders,
      withCredentials: true,
    };

    return this.http.put(updateProductUrl,product,options).subscribe((data: Product[]) => this.productList = data);
  }
}
