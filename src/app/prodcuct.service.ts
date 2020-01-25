import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProdcuctService {

  productList: Product[] = [];
  newProduct: Product;

  constructor(private http: HttpClient) { this.load(); }

  load() {
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

            this.productList.unshift(res[i]);
          }
        });

    }

  }

  addProduct(name: string, price: string, token: string) {
    this.newProduct = new Product(name, price);
    this.productList.unshift(this.newProduct);

    const addProductUrl = 'http://localhost:8080/addProduct';

    const addProductParams: HttpParams = new HttpParams()
      .append('name', name)
      .append('price', price);


    const addProductHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Bearer' + token);

    this.http.post(addProductUrl, {
      withCredentials: true
    }, {
        headers: addProductHeaders,
        params: addProductParams
      }).subscribe((res) => {
        console.log(res);
      });

  }
}
