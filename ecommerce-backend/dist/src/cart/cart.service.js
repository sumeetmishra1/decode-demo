"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = class CartService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
        const totalPrice = items.reduce((s, i) => s + i.quantity * i.product.price, 0);
        return {
            items: formattedItems,
            totalItems,
            totalPrice,
        };
    }
    async addToCart(productId) {
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
            data: { productId, quantity: 1 },
        });
    }
    async remove(id) {
        const item = await this.prisma.cartItem.findUnique({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException("Cart item not found");
        return this.prisma.cartItem.delete({ where: { id } });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map