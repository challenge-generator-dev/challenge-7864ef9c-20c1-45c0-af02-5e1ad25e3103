# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/repositories/productRepository.ts` — La fase "Configuración del entorno y creación de la API" se implementa aqui: este archivo es el ejercicio.
- `src/services/productService.ts` — La fase "Implementación de operaciones CRUD" se implementa aqui: este archivo es el ejercicio.
- `src/tests/productService.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.
- `src/tests/productRepository.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.
- `src/tests/routes.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`
  - `GET /products`

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest, Implementa operaciones CRUD de productos sobre DynamoDB con Express y las cubre con pruebas unitarias en Jest

### Misión / candidato
Persistir y consultar productos

### Reto
- Tema: CRUD de productos con Express y DynamoDB
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de CRUD de productos en DynamoDB
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y creación de la API — objetivo: Configurar el entorno de desarrollo y crear la estructura básica de la API REST para productos. — entregable (NO resolver): API REST básica con rutas para CRUD de productos y conexión a DynamoDB.
- Fase 2: Implementación de operaciones CRUD — objetivo: Implementar las operaciones CRUD para productos, incluyendo validaciones de negocio. — entregable (NO resolver): Operaciones CRUD completas para productos con validaciones de negocio implementadas.
- Fase 3: Implementación de pruebas unitarias — objetivo: Cubrir las operaciones CRUD con pruebas unitarias utilizando Jest. — entregable (NO resolver): Pruebas unitarias completas para las operaciones CRUD de productos utilizando Jest.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "29.5.14",
    "@types/supertest": "6.0.3",
    "class-validator": "0.15.1",
    "express": "4.22.3",
    "jest": "29.7.0",
    "supertest": "6.3.4",
    "ts-jest": "29.4.15"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/models/product.ts ===
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

// === ARCHIVO: src/routes/products.ts ===
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

// === ARCHIVO: src/services/productService.ts ===
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

// === ARCHIVO: src/repositories/productRepository.ts ===
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

// === ARCHIVO: src/main.ts ===
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

// === ARCHIVO: src/app.ts ===
import express, { Application, Request, Response, NextFunction } from 'express';

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.path} ${res.statusCode} - ${duration}ms`);
    });
    next();
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Error no manejado:', err.message);
    console.error(err.stack);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// === ARCHIVO: src/tests/productService.spec.ts ===
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

// === ARCHIVO: src/tests/productRepository.spec.ts ===
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

// === ARCHIVO: src/tests/routes.spec.ts ===
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

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"

```
