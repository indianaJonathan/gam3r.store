import type { Product } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async save(product: Product) {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as any;
  }

  async getById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return (product as any) ?? null;
  }

  async removeById(id: number) {
    await this.prisma.product.delete({ where: { id } });
  }
}
