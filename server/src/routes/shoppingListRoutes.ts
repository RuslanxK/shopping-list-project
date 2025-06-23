import { saveShoppingList } from "../controllers/shoppingController";
import { Router } from "express";

const router = Router();

router.post("/", saveShoppingList);

export default router;
