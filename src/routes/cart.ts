import { Router } from "express";
import {
  addProductToCart,
  createCart,
  deleteCart,
  getCartProducts,
  processCartOrder,
  removeProductFromCart,
} from "../controllers/cart";

const cartRoutes = Router();

cartRoutes.post("/", createCart);

cartRoutes.delete("/:id", deleteCart);

cartRoutes.get("/:id/products", getCartProducts);

cartRoutes.post("/:id/products", addProductToCart);

cartRoutes.delete("/:id/products/:productId", removeProductFromCart);

cartRoutes.post("/buy", processCartOrder);

export { cartRoutes };
