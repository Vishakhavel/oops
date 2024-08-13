import Product from "./classFiles/Product";

export const enoughStockForProduct = (
  product: Product,
  quantity: number
): boolean => {
  if (product.stock < quantity) {
    return false;
  } else {
    return true;
  }
};

export type CartItem = { quantity: number; product: Product };
