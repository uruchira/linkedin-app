import { Request, Response } from "express";

import { getAllProducts, createNewProduct } from "../services/product.service";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const productList = await getAllProducts();
    res.status(200).json({ data: productList, message: "success" });
  } catch (error) {
    console.error(error);
  }
};

export const addNew = async (req: Request, res: Response) => {
  const newProduct = await createNewProduct(req);
  res.json(newProduct);
};
