import { PrismaService } from '../prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): Promise<{
        id: number;
        name: string;
        price: number;
        image: string;
    }[]>;
}
