import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DatabaseModule } from '@app/common/database/database.module';
import { Customers } from './customers.entity';

@Module({
  imports: [
    // DatabaseModule, 
    TypeOrmModule.forFeature([Customers]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'anas',
      database: 'robotic',
      entities: [Customers],
      synchronize: false,
    }),],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
