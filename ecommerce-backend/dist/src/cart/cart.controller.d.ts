import { CartService } from "./cart.service";
import { AddToCartDto } from "./dto/add-to-cart.dto";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(): Promise<{
        items: {
            id: number;
            productId: number;
            quantity: number;
            name: string;
            price: number;
            image: string;
        }[];
        totalItems: number;
        totalPrice: number;
    }>;
    addToCart(dto: AddToCartDto): Promise<{
        id: number;
        productId: number;
        quantity: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        productId: number;
        quantity: number;
    }>;
}
