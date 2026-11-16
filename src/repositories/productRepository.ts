import { Product } from '../models/product';

export class ProductRepository {
    async createProduct(product: Product): Promise<Product> {
        // TODO(reto): Implementar interacción con DynamoDB
        throw new Error('Method not implemented');
    }

    async getProductById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar interacción con DynamoDB
        throw new Error('Method not implemented');
    }

    async updateProduct(id: string, product: Partial<Product>): Promise<Product | null> {
        // TODO(reto): Implementar interacción con DynamoDB
        throw new Error('Method not implemented');
    }

    async deleteProduct(id: string): Promise<void> {
        // TODO(reto): Implementar interacción con DynamoDB
        throw new Error('Method not implemented');
    }

    async listProducts(): Promise<Product[]> {
        // TODO(reto): Implementar interacción con DynamoDB
        throw new Error('Method not implemented');
    }
}