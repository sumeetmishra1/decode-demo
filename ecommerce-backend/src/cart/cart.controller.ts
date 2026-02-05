import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { AddToCartDto } from "./dto/add-to-cart.dto";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto.productId);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(Number(id));
  }
}
