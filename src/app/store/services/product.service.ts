import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  public path:string = 'assets/data/data.json';

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.path);
  }

  //getProductDetail(id:number):Product | any{
  //  return this.getProductList().subscribe(
  //  {
  //      next: (res) => res.find(a => a.id === id),
  //      error: (e) => console.error(e),
  //      complete: () => console.info('complete') 
  //  })
  //}

  getAllowedQuantities(){
    return [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
      { id: 6, name: "6" },
      { id: 7, name: "7" },
      { id: 8, name: "8" },
      { id: 9, name: "9" },
      { id: 10, name: "10" },
    ];
   
  }
}
