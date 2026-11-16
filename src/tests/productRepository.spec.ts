import { ProductRepository } from '../repositories/productRepository';
import { Product } from '../models/product';

describe('ProductRepository', () => {
    let productRepository: ProductRepository;
    let mockDynamoDB: any;

    beforeEach(() => {
        mockDynamoDB = {
            put: jest.fn(),
            get: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            scan: jest.fn()
        };
        productRepository = new ProductRepository(mockDynamoDB);
    });

    describe('createProduct', () => {
        test.skip('TODO(reto): debe crear un producto en DynamoDB', async () => {
            const product: Product = new Product(
                '1',
                'Test Product',
                'Description',
                100,
                10
            );
            mockDynamoDB.put.mockPromise = jest.fn().mockResolvedValue({});

            const result = await productRepository.createProduct(product);

            expect(result).toEqual(product);
            expect(mockDynamoDB.put).toHaveBeenCalledWith(expect.objectContaining({
                TableName: expect.any(String),
                Item: expect.objectContaining({
                    id: '1',
                    name: 'Test Product'
                })
            }));
        });

        test.skip('TODO(reto): debe lanzar error si la creación falla', async () => {
            const product: Product = new Product(
                '1',
                'Test Product',
                'Description',
                100,
                10
            );
            mockDynamoDB.put.mockRejectedValue(new Error('DynamoDB error'));

            await expect(productRepository.createProduct(product)).rejects.toThrow('DynamoDB error');
        });
    });

    describe('getProductById', () => {
        test.skip('TODO(reto): debe obtener un producto por su ID', async () => {
            const expectedProduct: Product = new Product(
                '1',
                'Test Product',
                'Description',
                100,
                10
            );
            mockDynamoDB.get.mockResolvedValue({ Item: expectedProduct });

            const result = await productRepository.getProductById('1');

            expect(result).toEqual(expectedProduct);
            expect(mockDynamoDB.get).toHaveBeenCalledWith(expect.objectContaining({
                TableName: expect.any(String),
                Key: { id: '1' }
            }));
        });

        test.skip('TODO(reto): debe retornar null si el producto no existe', async () => {
            mockDynamoDB.get.mockResolvedValue({});

            const result = await productRepository.getProductById('999');

            expect(result).toBeNull();
        });
    });

    describe('updateProduct', () => {
        test.skip('TODO(reto): debe actualizar un producto existente', async () => {
            const updateData: Partial<Product> = { name: 'Updated Name', price: 150 };
            const updatedProduct: Product = new Product(
                '1',
                'Updated Name',
                'Description',
                150,
                10
            );
            mockDynamoDB.update.mockResolvedValue({ Attributes: updatedProduct });

            const result = await productRepository.updateProduct('1', updateData);

            expect(result).toEqual(updatedProduct);
        });

        test.skip('TODO(reto): debe retornar null si el producto no existe', async () => {
            mockDynamoDB.update.mockRejectedValue(new Error('Item not found'));

            const result = await productRepository.updateProduct('999', { name: 'New Name' });

            expect(result).toBeNull();
        });
    });

    describe('deleteProduct', () => {
        test.skip('TODO(reto): debe eliminar un producto existente', async () => {
            mockDynamoDB.delete.mockResolvedValue({});

            await productRepository.deleteProduct('1');

            expect(mockDynamoDB.delete).toHaveBeenCalledWith(expect.objectContaining({
                TableName: expect.any(String),
                Key: { id: '1' }
            }));
        });

        test.skip('TODO(reto): debe lanzar error si el producto no existe', async () => {
            mockDynamoDB.delete.mockRejectedValue(new Error('Item not found'));

            await expect(productRepository.deleteProduct('999')).rejects.toThrow();
        });
    });

    describe('listProducts', () => {
        test.skip('TODO(reto): debe listar todos los productos', async () => {
            const products: Product[] = [
                new Product('1', 'Product 1', 'Desc 1', 100, 10),
                new Product('2', 'Product 2', 'Desc 2', 200, 20)
            ];
            mockDynamoDB.scan.mockResolvedValue({ Items: products });

            const result = await productRepository.listProducts();

            expect(result).toEqual(products);
            expect(mockDynamoDB.scan).toHaveBeenCalledWith(expect.objectContaining({
                TableName: expect.any(String)
            }));
        });

        test.skip('TODO(reto): debe retornar array vacío si no hay productos', async () => {
            mockDynamoDB.scan.mockResolvedValue({ Items: [] });

            const result = await productRepository.listProducts();

            expect(result).toEqual([]);
        });
    });
});