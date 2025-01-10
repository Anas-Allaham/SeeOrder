import { Module } from '@nestjs/common';
import { RestaurentController } from './restaurent.controller';
import { RestaurentService } from './restaurent.service';

@Module({
  imports: [],
  controllers: [RestaurentController],
  providers: [RestaurentService],
})
export class RestaurentModule {}
