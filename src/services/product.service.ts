import { PrismaClient } from "@prisma/client";
import { Request } from "express";

const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<unknown[] | undefined> => {
  try {
    const allProducts = await prisma.product.findMany();
    return allProducts;
  } catch (error) {
    console.error(error);
  }
};

export const createNewProduct = async (
  data: Request
): Promise<unknown | undefined> => {
  try {
    const newProduct = await prisma.product.create({ data: data.body });
    return newProduct;
  } catch (error) {
    console.error(error);
  }
};
