import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product';
import { ProductRepository } from '../repositories/productRepository';

export class ProductService {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(productData: ProductCreateDTO): Promise<Product> {
        // TODO(reto): Implementar validación de duplicados y lógica de creación
        throw new Error('Method not implemented');
    }

    async getProductById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar lógica de obtención
        throw new Error('Method not implemented');
    }

    async updateProduct(id: string, productData: ProductUpdateDTO): Promise<Product | null> {
        // TODO(reto): Implementar lógica de actualización
        throw new Error('Method not implemented');
    }

    async deleteProduct(id: string): Promise<void> {
        // TODO(reto): Implementar lógica de eliminación
        throw new Error('Method not implemented');
    }

    async listProducts(): Promise<Product[]> {
        // TODO(reto): Implementar lógica de listado
        throw new Error('Method not implemented');
    }
}