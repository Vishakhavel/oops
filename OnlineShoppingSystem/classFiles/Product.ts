import { v4 as uuidv4 } from "uuid";
export default class Product {
  name: string;
  productID: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.productID = uuidv4();
    this.price = price;
    this.stock = stock;
  }
  updateStock(quantity: number): void {
    // add the quantity to the stock
    this.stock += quantity;
  }
}
