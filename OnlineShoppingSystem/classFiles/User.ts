import Product from "./Product";
import Order from "./Order";
import { v4 as uuidv4 } from "uuid";

import { enoughStockForProduct } from "../utils";

type CartItem = { quantity: number; product: Product };
export default class User {
  private name: string;
  private readonly userID: string;
  //   cart is simply an array of products, the user wishes to buy
  cart: CartItem[];
  orders: Order[];

  constructor(name: string) {
    this.name = name;
    // once created, the user will have an immutable unique userID
    this.userID = uuidv4();
    this.cart = [];
    this.orders = [];
  }

  public removeItemsFromCart(product: Product, quantity: number): void {
    let productIndex = this.cart.findIndex(
      (ci) => ci.product.productID === product.productID
    );

    // check if the item exists in the cart.

    if (productIndex === -1) {
      // product does not exist in cart
      throw new Error(`Product - ${product.name} does not exist in cart!`);
    }

    // if yes, check if the quantity exceeds the quantity of this item currently in stock

    let stockForProductInCart = this.cart[productIndex].quantity;

    if (stockForProductInCart > quantity) {
      // subtract stock
      this.cart[productIndex].quantity -= quantity;
      //   update the stock for the product
      product.updateStock(quantity);
    } else if (stockForProductInCart === quantity) {
      // remove the item from cart completely
      this.cart.splice(productIndex, 1);
      //   update the stock for the product
      product.updateStock(quantity);
    } else {
      throw new Error(
        `Your cart contains only ${this.cart[productIndex].quantity} units of ${product.name}!`
      );
    }
  }
  public addToCart(product: Product, quantity: number): void {
    // chec if there is enough stock
    if (enoughStockForProduct(product, quantity)) {
      //   add to cart.
      this.cart.push({ product, quantity });
      // update the stock for this product.
      product.updateStock(-quantity);
    } else {
      throw new Error(`There is not enough quantity of ${product.name}!`);
    }
  }
  public placeOrder(): void {
    // create new order and push to array of orders for the user.
    const order = new Order(this.cart, this.userID);
    this.orders.push(order);
    order.printSummary();
  }
  public showOrders(): void {
    let printString = "Orders - \n";
    this.orders.map((o) => {
      o.printSummary();
    });
  }
}
