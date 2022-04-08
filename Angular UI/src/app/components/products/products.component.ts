import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any
  public totalItem: number = 0
  searchKey: string = ''
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productList = res
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: -1, total: 0 })
      })
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item)
  }
  removefromcart(item: any) {
    this.cartService.removefromCart(item)
  }
}
