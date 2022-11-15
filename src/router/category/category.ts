import { Router } from "express";
import { Categori } from "../../controller/categori";
import { validateInfoCategori } from "../../middleware/infoValidate";

const router = Router();
const categori = new Categori();

router.post("/categori", validateInfoCategori, categori.create);
router.get("/categori", categori.findAll);
router.get("/categori/:id", categori.findOne);
router.put("/categori/:id", validateInfoCategori, categori.update);
router.delete("/categori/:id", categori.delete);

export default router;
