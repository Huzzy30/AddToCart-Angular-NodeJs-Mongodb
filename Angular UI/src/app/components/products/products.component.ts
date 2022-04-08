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
  public filterCategory: any
  searchKey: string = ''
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productList = res
    })

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val
    })
  }
  addtocart(item: any) {
    console.log(item)
    this.cartService.addtoCart(item)
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a
      }
    })
  }
}
