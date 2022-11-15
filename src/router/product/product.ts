import { Router } from "express";
import { Product } from "../../controller/product";

const router = Router();
const product = new Product();

router.post("/product", product.create);
router.get("/product", product.findAll);
router.get("/product/:id", product.findOne);
router.put("/product/:id", product.update);
router.delete("/product/:id", product.delete);

export default router;
