"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require('@prisma/client');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new PrismaClient();
console.log("DATABASE_URL:", process.env.DATABASE_URL);
async function main() {
    await prisma.product.createMany({
        data: [
            { name: 'iPhone 15', price: 79999, image: 'iphone.png' },
            { name: 'MacBook Pro', price: 199999, image: 'macbook.png' },
            { name: 'AirPods Pro', price: 24999, image: 'airpods.png' },
        ],
    });
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map