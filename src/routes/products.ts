import { Router } from 'express';
import { ProductService } from '../services/productService';
import { ProductCreateDTO, ProductUpdateDTO } from '../models/product';

const router = Router();
const productService = new ProductService();

router.post('/', async (req, res, next) => {
    try {
        const productData = req.body as ProductCreateDTO;
        const product = await productService.createProduct(productData);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const productData = req.body as ProductUpdateDTO;
        const product = await productService.updateProduct(req.params.id, productData);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const products = await productService.listProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

export const productsRouter = router;
export default router;