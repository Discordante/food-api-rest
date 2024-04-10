import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindDishesDto {
  @ApiPropertyOptional({
    description: 'Number of items to skip',
    example: 0,
    type: Number,
    default: 0,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  skip?: number;

  @ApiPropertyOptional({
    description: 'Maximum number of items to return',
    example: 20,
    type: Number,
    default: 20,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  take?: number;

  @ApiPropertyOptional({
    example: Prisma.SortOrder.asc,
    enum: Prisma.SortOrder,
    default: Prisma.SortOrder.asc,
  })
  @IsOptional()
  orderBy?: Prisma.SortOrder;
}
