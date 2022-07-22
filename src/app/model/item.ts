import {Product} from "./product";

export class Item {
  private _product:Product;
  private _quantity:number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
  getTotal(){
    return this.product.price * this.quantity;
  }
}
