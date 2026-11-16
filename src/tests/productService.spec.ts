import { ProductService } from '../services/productService';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product';

describe('ProductService', () => {
    let productService: ProductService;
    let mockRepository: any;

    beforeEach(() => {
        mockRepository = {
            createProduct: jest.fn(),
            getProductById: jest.fn(),
            updateProduct: jest.fn(),
            deleteProduct: jest.fn(),
            listProducts: jest.fn()
        };
        productService = new ProductService();
    });

    describe('createProduct', () => {
        test.skip('TODO(reto): debe crear un producto exitosamente', async () => {
            const productData: ProductCreateDTO = new ProductCreateDTO(
                'Test Product',
                'Test Description',
                100,
                10
            );
            const expectedProduct: Product = new Product(
                '1',
                'Test Product',
                'Test Description',
                100,
                10
            );
            mockRepository.createProduct.mockResolvedValue(expectedProduct);

            const result = await productService.createProduct(productData);

            expect(result).toEqual(expectedProduct);
            expect(mockRepository.createProduct).toHaveBeenCalledWith(expect.any(Product));
        });

        test.skip('TODO(reto): debe lanzar error si el nombre ya existe', async () => {
            const productData: ProductCreateDTO = new ProductCreateDTO(
                'Existing Product',
                'Description',
                50,
                5
            );
            mockRepository.createProduct.mockRejectedValue(new Error('Duplicate name'));

            await expect(productService.createProduct(productData)).rejects.toThrow('Duplicate name');
        });

        test.skip('TODO(reto): debe lanzar error si el precio es negativo', async () => {
            const productData: ProductCreateDTO = new ProductCreateDTO(
                'Product',
                'Description',
                -10,
                5
            );

            await expect(productService.createProduct(productData)).rejects.toThrow();
        });
    });

    describe('getProductById', () => {
        test.skip('TODO(reto): debe retornar un producto por su ID', async () => {
            const expectedProduct: Product = new Product(
                '1',
                'Test Product',
                'Description',
                100,
                10
            );
            mockRepository.getProductById.mockResolvedValue(expectedProduct);

            const result = await productService.getProductById('1');

            expect(result).toEqual(expectedProduct);
            expect(mockRepository.getProductById).toHaveBeenCalledWith('1');
        });

        test.skip('TODO(reto): debe retornar null si el producto no existe', async () => {
            mockRepository.getProductById.mockResolvedValue(null);

            const result = await productService.getProductById('999');

            expect(result).toBeNull();
        });
    });

    describe('updateProduct', () => {
        test.skip('TODO(reto): debe actualizar un producto existente', async () => {
            const updateData: ProductUpdateDTO = new ProductUpdateDTO({
                name: 'Updated Product',
                price: 150
            });
            const expectedProduct: Product = new Product(
                '1',
                'Updated Product',
                'Description',
                150,
                10
            );
            mockRepository.updateProduct.mockResolvedValue(expectedProduct);

            const result = await productService.updateProduct('1', updateData);

            expect(result).toEqual(expectedProduct);
            expect(mockRepository.updateProduct).toHaveBeenCalledWith('1', updateData);
        });

        test.skip('TODO(reto): debe retornar null si el producto no existe', async () => {
            const updateData: ProductUpdateDTO = new ProductUpdateDTO({ name: 'New Name' });
            mockRepository.updateProduct.mockResolvedValue(null);

            const result = await productService.updateProduct('999', updateData);

            expect(result).toBeNull();
        });
    });

    describe('deleteProduct', () => {
        test.skip('TODO(reto): debe eliminar un producto existente', async () => {
            mockRepository.deleteProduct.mockResolvedValue(undefined);

            await productService.deleteProduct('1');

            expect(mockRepository.deleteProduct).toHaveBeenCalledWith('1');
        });

        test.skip('TODO(reto): debe lanzar error si el producto no existe', async () => {
            mockRepository.deleteProduct.mockRejectedValue(new Error('Product not found'));

            await expect(productService.deleteProduct('999')).rejects.toThrow('Product not found');
        });
    });

    describe('listProducts', () => {
        test.skip('TODO(reto): debe listar todos los productos', async () => {
            const products: Product[] = [
                new Product('1', 'Product 1', 'Desc 1', 100, 10),
                new Product('2', 'Product 2', 'Desc 2', 200, 20)
            ];
            mockRepository.listProducts.mockResolvedValue(products);

            const result = await productService.listProducts();

            expect(result).toEqual(products);
            expect(mockRepository.listProducts).toHaveBeenCalled();
        });

        test.skip('TODO(reto): debe retornar array vacío si no hay productos', async () => {
            mockRepository.listProducts.mockResolvedValue([]);

            const result = await productService.listProducts();

            expect(result).toEqual([]);
        });
    });
});