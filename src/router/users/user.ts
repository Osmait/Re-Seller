import { Router } from "express";
import { User } from "../../controller/user";
import { validateInfo } from "../../middleware/infoValidate";

const router = Router();
const user = new User();

router.post("/user", validateInfo, user.create);
router.get("/user", user.findAll);
router.get("/user/:id", user.finOne);
router.put("/user/:id", validateInfo, user.update);
router.delete("/user/:id", user.detele);

export default router;
