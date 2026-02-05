import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        image: string;
    }[]>;
}
