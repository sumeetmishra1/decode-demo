import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
      },
    });
  }
}
