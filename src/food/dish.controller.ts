import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { DishService } from './dish.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { FindDishesDto } from './dto/find-dishes.dto';

@ApiTags('Food')
@Controller('food')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  async findAll(@Query() searchParamsDto: FindDishesDto, @Res() res: Response) {
    const data = await this.dishService.findAll(searchParamsDto);
    return res.status(HttpStatus.OK).json(data);
  }
}
