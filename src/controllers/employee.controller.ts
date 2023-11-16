import { Request, Response } from "express";
import ShortUniqueId from "short-unique-id";

import { getAll } from "../services/employee.service";

const uid = new ShortUniqueId({ length: 10 });

export const getAllEmployees = (_: Request, res: Response) => {
  const allEmployees = getAll();
  res.json(allEmployees);
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

  const allEmployees = getAll();
  res.status(201).json([...allEmployees, newEmployee]);
};
