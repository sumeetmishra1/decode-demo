import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CartModule,
  ],
})
export class AppModule {}
