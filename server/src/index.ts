import express from 'express';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes'
import shoppingListRoutes from "./routes/shoppingListRoutes";
import { AppDataSource } from './data-source';
import { seedCategories } from './utils/initData';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const startServer = async () => {

  try {
    
    await AppDataSource.initialize();
    console.log(' MongoDB connected');
    await seedCategories();

    app.use('/api/categories', categoryRoutes);
    app.use('/api/products', productRoutes);
    app.use("/api/save-shopping-list", shoppingListRoutes);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('DB Connection Error:', err);
  }
};

startServer();
