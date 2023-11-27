import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (_: Request, res: Response) => {
  const allProducts = await prisma.product.findMany();
  res.json(allProducts);
};

export const createproduct = async (req: Request, res: Response) => {
  const newProduct = await prisma.product.create({ data: req.body });
  res.json(newProduct);
};
