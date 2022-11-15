import { Router } from "express";
import { Cart } from "../../controller/cart";

const router = Router();
const cart = new Cart();

router.post("/cart", cart.create);

router.post("/order", cart.createOrder);
router.get("/cart", cart.findCart);

// router.put("/product/:id", validateInfoCategori, product.update);
// router.delete("/product/:id", product.delete);

export default router;
