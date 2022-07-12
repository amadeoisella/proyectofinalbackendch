import { Router } from "express";
import { productsRoutes } from "./products";
import { cartRoutes } from "./cart";
import { userRoutes } from "./user";

const router = Router();

router.use("/products", productsRoutes);
router.use("/cart", cartRoutes);
router.use("/users", userRoutes);

export { router };
