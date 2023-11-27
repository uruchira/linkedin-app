import express from "express";

import {
  getAllProducts,
  createproduct,
} from "../controllers/product.controller";

const router = express.Router();
router.route("/").get(getAllProducts).post(createproduct);

export default router;
