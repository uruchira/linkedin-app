import express from "express";

import {
  getAllEmployees,
  createNewEmployee,
} from "../controllers/employee.controller";

const router = express.Router();
router.route("/").get(getAllEmployees).post(createNewEmployee);

export default router;
