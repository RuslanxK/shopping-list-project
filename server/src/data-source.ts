import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './models/product';
import { Category } from './models/category';
import { Order } from './models/order';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: process.env.MONGO_URI, 
  synchronize: true,
  logging: false,
  entities: [Product, Category, Order],
});
