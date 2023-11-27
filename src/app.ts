import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/product.route";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/product", productRoutes);

export default app;
