import { Category } from '../models/category';
import { AppDataSource } from '../data-source';
import { PREDEFINED_CATEGORIES } from '../constants/predefinedCategories';

export const seedCategories = async (): Promise<void> => {
  try {
    const repo = AppDataSource.getMongoRepository(Category);
    
    const existingCount = await repo.count();
    if (existingCount > 0) {
      console.log('Categories already exist. Skipping seeding.');
      return;
    }

    const categories = PREDEFINED_CATEGORIES.map((name) =>
      Object.assign(new Category(), { name })
    );

    await repo.save(categories);
    console.log('Default categories inserted.');
  } catch (err) {
    console.error('Failed to seed categories:', err);
  }
};
