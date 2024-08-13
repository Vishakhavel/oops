// before I start, these are the operation I want to perform

// REQUIREMENTS -
// create a new user
// create 5 products
// add these products to cart one by one
// if the quantity of the order exceeds stock -> throw error.
// place order on these 5 items -> display orderID and date/time stamp of order for the user to track

// create 2 more items
// create another user-> user2
// both user1 and user2 places order on limited stock item -> the one placing the order later should get an error message if the product in the cart is no longer available in the quantity desired.
// place order on these 2 items -> display orderID and date/time stamp of order for the user to track

// final  reqs -
// create user

import User from "./classFiles/User";
import Product from "./classFiles/Product";

const user = new User("user1");

// create 5 products -> ps5, xbox, nintendo, earphones, guitars

const ps5 = new Product("ps5", 500, 5);
const xbox = new Product("xbox", 500, 5);
const nintendo = new Product("nintendo", 500, 5);
const earphones = new Product("earphones", 500, 5);
const guitars = new Product("guitars", 500, 5);

// add more quantity than in stock to cart -> should throw error

// add proper quantity -> should be added to cart.

// add another user -> try to add quantity in excess of stock -> error message cos no stock

// remove all the stock for ps5, since they went out of stock after the user added to cart, before the user clicked on place order -> error message

// user can remove items from his cart -> removeItemsFromCart
