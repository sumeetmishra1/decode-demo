import { PrismaService } from "../prisma/prisma.service";
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        image: string;
    }[]>;
}
