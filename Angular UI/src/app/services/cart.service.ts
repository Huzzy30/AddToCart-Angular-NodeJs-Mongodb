import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])
  constructor() {}
  getProducts() {
    return this.productList.asObservable()
  }

  setProduct(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  addtoCart(product: any) {
    product.quantity = product.quantity == -1 ? 1 : product.quantity + 1
    product.total = product.price * product.quantity
    if (!this.cartItemList.includes(product)) {
      if (product.quantity !== 0 && product.quantity !== -1) {
        this.cartItemList.push(product)
        this.productList.next(this.cartItemList)
      }
    }
    this.getTotalPrice()
  }

  removefromCart(product: any) {
    product.quantity--
    product.total = product.total - product.price

    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
  }

  getTotalPrice(): number {
    let grandTotal = 0
    this.cartItemList.map((a: any) => {
      if (a.quantity !== 0) {
        grandTotal += a.price
      }
    })
    return grandTotal
  }
  removeCartItem(product: any) {
    console.log(product)
    this.cartItemList.map((a: any, index: any) => {
      this.cartItemList.splice(index, 1)
    })
    this.productList.next(this.cartItemList)
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
