// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Category } from '../models/category';

const repo = AppDataSource.getMongoRepository(Category);

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await repo.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};
