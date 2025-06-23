import { Router } from 'express';
import { getAllProducts, createProduct, getProductsCount } from '../controllers/productController';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/count', getProductsCount);


export default router;
