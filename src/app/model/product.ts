export class Product {

  private _id: string;
  private _name:string;
  private _img:string;
  private _price:number;
  private _discount:number;
  private _nsx:string;

  constructor(id: string, name: string, img: string, price: number, discount:number, nsx:string) {
    this._id = id;
    this._name = name;
    this._img = img;
    this._price = price;
    this._discount = discount;
    this. _nsx = nsx;

  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
  set discount(value: number) {
    this._discount = value;
  }
  get discount(): number {
    return this._discount;
  }

  get nsx(): string {
    return this._nsx;
  }

  set nsx(value: string) {
    this._nsx = value;
  }
}
