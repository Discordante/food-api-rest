import { Module } from '@nestjs/common';
import { DishModule } from './food/dish.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), DishModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
