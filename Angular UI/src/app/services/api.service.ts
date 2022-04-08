import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public productsUrl: string = 'http://localhost:4300/products'
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>(this.productsUrl).pipe(
      map((res: any) => {
        return res
      }),
    )
  }
}
