import { v4 as uuidv4 } from "uuid";
import Product from "./Product";
import { CartItem } from "../utils";
export default class Order {
  orderID: string;
  cartItems: CartItem[];
  userID: string;
  orderDate: Date;
  constructor(products: CartItem[], userID: string) {
    this.orderID = uuidv4();
    this.cartItems = products;
    this.userID = userID;
    this.orderDate = new Date();
  }
  calculateTotalAmount(): number {
    let sum = 0;
    this.cartItems.map((p) => {
      sum += p.product.price * p.quantity;
    });
    return sum;
  }
  public printSummary(): void {
    let printString = "Order summary - \n Product | Quantity";
    this.cartItems.map((ci) => {
      printString += `${ci.product.name} | ${ci.quantity}`;
    });
    console.log(printString);
  }
}
