import { Module } from '@nestjs/common';
import { RestaurentController } from './restaurent.controller';
import { RestaurentService } from './restaurent.service';
// import { DatabaseModule } from '@app/common/database/database.module';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'apps/orders/src/orders.entity';
import { Restaurent } from './restaurent.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'anas',
        database: 'robotic',
        entities: [Restaurent],
        synchronize: true,
      }),TypeOrmModule.forFeature([Restaurent])],
  controllers: [RestaurentController],
  providers: [RestaurentService],
})
export class RestaurentModule {}
