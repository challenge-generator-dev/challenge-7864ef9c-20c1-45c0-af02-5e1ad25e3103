import { IsString, IsNumber, IsPositive, Min, validate } from 'class-validator';

export class Product {
    id: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @Min(0)
    stock: number;

    constructor(id: string, name: string, description: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    static async validate(product: Product): Promise<void> {
        const errors = await validate(product);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.join(', ')}`);
        }
    }
}

export class ProductCreateDTO {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @Min(0)
    stock: number;

    constructor(name: string, description: string, price: number, stock: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}

export class ProductUpdateDTO {
    @IsString()
    name?: string;

    @IsString()
    description?: string;

    @IsNumber()
    @IsPositive()
    price?: number;

    @IsNumber()
    @Min(0)
    stock?: number;

    constructor(data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
    }) {
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.stock = data.stock;
    }
}