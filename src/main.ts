import { app } from './app';
import { ProductRepository } from './repositories/productRepository';
import { ProductService } from './services/productService';
import productsRouter from './routes/products';

const PORT = process.env.PORT || 3000;

const productRepository = new ProductRepository();
const productService = new ProductService();

app.use('/products', productsRouter);

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});

export { productService, productRepository };