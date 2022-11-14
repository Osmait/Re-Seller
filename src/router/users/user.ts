import { Router } from "express";
import { User } from "../../controller/user";

const router = Router();
const user = new User();

router.post("/user", user.create);
router.get("/user", user.findAll);

export default router;
