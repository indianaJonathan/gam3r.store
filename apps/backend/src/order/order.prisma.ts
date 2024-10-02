import { Order } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }

  async getById(id: number): Promise<Order> {
    const order = await this.prisma.order.findMany({
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        delivery: true,
      },
      where: { id },
    });
    return order as any;
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        total: order.total,
        paymentMethod: order.paymentMethod,
        delivery: { create: { ...order.delivery } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) return;

    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: order.id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.orderDelivery.delete({ where: { id: order.deliveryId } }),
    ]);
  }
}
