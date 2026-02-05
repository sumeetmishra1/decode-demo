import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async getCart() {
  const items = await this.prisma.cartItem.findMany({
    include: { product: true },
  });

  const formattedItems = items.map(i => ({
    id: i.id,
    productId: i.productId,
    quantity: i.quantity,
    name: i.product.name,
    price: i.product.price,
    image: i.product.image,
  }));

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  const totalPrice = items.reduce(
    (s, i) => s + i.quantity * i.product.price,
    0
  );

  return {
    items: formattedItems,
    totalItems,
    totalPrice,
  };
}


  async addToCart(productId: number) {
    const existing = await this.prisma.cartItem.findFirst({
      where: { productId },
    });

    if (existing) {
      return this.prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + 1 },
      });
    }

    return this.prisma.cartItem.create({
      data: { productId, quantity:1 },
    });
  }

  async remove(id: number) {
    const item = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!item) throw new NotFoundException("Cart item not found");

    return this.prisma.cartItem.delete({ where: { id } });
  }
}
