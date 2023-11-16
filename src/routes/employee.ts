import express from "express";

import {
  getAllEmployees,
  createNewEmployee,
} from "../controllers/employeeController";

const router = express.Router();
router.route("/").get(getAllEmployees).post(createNewEmployee);

export default router;
