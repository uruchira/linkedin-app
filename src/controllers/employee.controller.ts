import { Request, Response } from "express";
import ShortUniqueId from "short-unique-id";

import { employeeData } from "../data/employee.data";

const uid = new ShortUniqueId({ length: 10 });

export const getAllEmployees = (_: Request, res: Response) => {
  res.json(employeeData);
};

export const createNewEmployee = (req: Request, res: Response) => {
  const newEmployee = {
    id: uid.rnd(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required." });
  }
  res.status(201).json([...employeeData, newEmployee]);
};
