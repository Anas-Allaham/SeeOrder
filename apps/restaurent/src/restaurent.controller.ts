import { Controller, Get } from '@nestjs/common';
import { RestaurentService } from './restaurent.service';

@Controller()
export class RestaurentController {
  constructor(private readonly restaurentService: RestaurentService) {}

  @Get()
  getHello(): string {
    return this.restaurentService.getHello();
  }
}
