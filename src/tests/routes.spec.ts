import request from 'supertest';
import productsRouter from '../routes/products';
import { Product } from '../models/product';
import express, { Express } from 'express';

describe('Products Routes', () => {
    let app: Express;
    let mockProductService: any;

    beforeEach(() => {
        app = express();
        app.use(express.json());
        app.use('/products', productsRouter);

        mockProductService = {
            createProduct: jest.fn(),
            getProductById: jest.fn(),
            updateProduct: jest.fn(),
            deleteProduct: jest.fn(),
            listProducts: jest.fn()
        };
    });

    describe('POST /products', () => {
        test.skip('TODO(reto): debe crear un producto exitosamente', async () => {
            const productData = {
                name: 'Test Product',
                description: 'Test Description',
                price: 100,
                stock: 10
            };
            const createdProduct: Product = new Product(
                '1',
                'Test Product',
                'Test Description',
                100,
                10
            );
            mockProductService.createProduct.mockResolvedValue(createdProduct);

            const response = await request(app)
                .post('/products')
                .send(productData);

            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.objectContaining({
                id: '1',
                name: 'Test Product',
                price: 100
            }));
        });

        test.skip('TODO(reto): debe retornar 400 si los datos son inválidos', async () => {
            const invalidData = {
                name: '',
                description: 'Test',
                price: -10,
                stock: 5
            };

            const response = await request(app)
                .post('/products')
                .send(invalidData);

            expect(response.status).toBe(400);
        });

        test.skip('TODO(reto): debe retornar 500 si hay un error del servidor', async () => {
            const productData = {
                name: 'Test Product',
                description: 'Description',
                price: 100,
                stock: 10
            };
            mockProductService.createProduct.mockRejectedValue(new Error('Server error'));

            const response = await request(app)
                .post('/products')
                .send(productData);

            expect(response.status).toBe(500);
        });
    });

    describe('GET /products/:id', () => {
        test.skip('TODO(reto): debe obtener un producto por su ID', async () => {
            const product: Product = new Product(
                '1',
                'Test Product',
                'Description',
                100,
                10
            );
            mockProductService.getProductById.mockResolvedValue(product);

            const response = await request(app).get('/products/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.objectContaining({
                id: '1',
                name: 'Test Product'
            }));
        });

        test.skip('TODO(reto): debe retornar 404 si el producto no existe', async () => {
            mockProductService.getProductById.mockResolvedValue(null);

            const response = await request(app).get('/products/999');

            expect(response.status).toBe(404);
        });
    });

    describe('PUT /products/:id', () => {
        test.skip('TODO(reto): debe actualizar un producto existente', async () => {
            const updateData = {
                name: 'Updated Product',
                price: 150
            };
            const updatedProduct: Product = new Product(
                '1',
                'Updated Product',
                'Description',
                150,
                10
            );
            mockProductService.updateProduct.mockResolvedValue(updatedProduct);

            const response = await request(app)
                .put('/products/1')
                .send(updateData);

            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.objectContaining({
                name: 'Updated Product',
                price: 150
            }));
        });

        test.skip('TODO(reto): debe retornar 404 si el producto no existe', async () => {
            const updateData = { name: 'New Name' };
            mockProductService.updateProduct.mockResolvedValue(null);

            const response = await request(app)
                .put('/products/999')
                .send(updateData);

            expect(response.status).toBe(404);
        });
    });

    describe('DELETE /products/:id', () => {
        test.skip('TODO(reto): debe eliminar un producto existente', async () => {
            mockProductService.deleteProduct.mockResolvedValue(undefined);

            const response = await request(app).delete('/products/1');

            expect(response.status).toBe(204);
        });

        test.skip('TODO(reto): debe retornar 404 si el producto no existe', async () => {
            mockProductService.deleteProduct.mockRejectedValue(new Error('Not found'));

            const response = await request(app).delete('/products/999');

            expect(response.status).toBe(404);
        });
    });

    describe('GET /products', () => {
        test.skip('TODO(reto): debe listar todos los productos', async () => {
            const products: Product[] = [
                new Product('1', 'Product 1', 'Desc 1', 100, 10),
                new Product('2', 'Product 2', 'Desc 2', 200, 20)
            ];
            mockProductService.listProducts.mockResolvedValue(products);

            const response = await request(app).get('/products');

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(2);
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({ id: '1', name: 'Product 1' }),
                expect.objectContaining({ id: '2', name: 'Product 2' })
            ]));
        });

        test.skip('TODO(reto): debe retornar array vacío si no hay productos', async () => {
            mockProductService.listProducts.mockResolvedValue([]);

            const response = await request(app).get('/products');

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });
    });
});