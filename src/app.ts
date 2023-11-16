import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import employeeRoutes from "./routes/employee";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/employee", employeeRoutes);

export default app;
