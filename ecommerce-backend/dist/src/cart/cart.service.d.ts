import { PrismaService } from "../prisma/prisma.service";
export declare class CartService {
    private prisma;
    constructor(prisma: PrismaService);
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
    addToCart(productId: number): Promise<{
        id: number;
        productId: number;
        quantity: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        productId: number;
        quantity: number;
    }>;
}
