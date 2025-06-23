import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../models/order";
import { Product } from "../models/product";

export const saveShoppingList = async (req: Request, res: Response) => {
  try {
    const groupedOrders = req.body;

    if (!Array.isArray(groupedOrders)) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }

    const orderRepo = AppDataSource.getMongoRepository(Order);
    const productRepo = AppDataSource.getMongoRepository(Product);

    const newOrder = {
      order: groupedOrders, 
      date: new Date(),     
    };

    await orderRepo.insert(newOrder); 
    await productRepo.deleteMany({});

    res.status(201).json({ message: "Shopping list saved and products deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
