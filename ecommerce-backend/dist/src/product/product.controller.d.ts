import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<{
        id: number;
        name: string;
        price: number;
        image: string;
    }[]>;
}
