import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FindDishesDto } from './dto/find-dishes.dto';

@Injectable()
export class DishService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: FindDishesDto) {
    const { skip, take, orderBy } = params;

    return this.prisma.dish.findMany({
      include: {
        nutritionalValues: true,
        tags: true,
        allergens: true,
        ingredients: true,
      },
      skip,
      take,
      orderBy: { id: orderBy },
    });
  }
}
