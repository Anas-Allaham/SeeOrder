import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
// import { DatabaseModule } from '@app/common/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meals } from './meals.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'anas',
        database: 'robotic',
        entities: [Meals],
        synchronize: true,
      }),TypeOrmModule.forFeature([Meals])],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
