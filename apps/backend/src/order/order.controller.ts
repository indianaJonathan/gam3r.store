import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.prisma';
import { Order } from '@gstore/core';

@Controller('orders')
export class OrderController {
  constructor(private readonly repo: OrderPrisma) {}

  @Get()
  async getAll(): Promise<Order[]> {
    return this.repo.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Order> {
    return this.repo.getById(+id);
  }

  @Post()
  async save(@Body() order: Order): Promise<void> {
    return this.repo.save(order);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
