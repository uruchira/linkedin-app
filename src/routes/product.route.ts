import express from "express";

import { getAll, addNew } from "../controllers/product.controller";

const router = express.Router();
router.route("/").get(getAll).post(addNew);

export default router;
