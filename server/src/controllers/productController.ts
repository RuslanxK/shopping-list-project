import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Product } from '../models/product';
import { isValidProductName } from '../validators/validateProduct';

const repo = AppDataSource.getMongoRepository(Product);

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await repo.find();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, categoryId } = req.body;

  if (!isValidProductName(name)) {
   res.status(400).json({error: 'Product name must be a string with at least 2 characters.'});
  }

  const product = new Product();
  product.name = name.trim();
  product.categoryId = categoryId

  await repo.save(product);
  res.status(201).json(product);
};


export const getProductsCount = async (_req: Request, res: Response) => {
  const count = await repo.count();
  res.json({ count });
};