import { Module } from '@nestjs/common';
import { DiscountsController } from './discounts.controller';
import { DiscountsService } from './discounts.service';
// import { DatabaseModule } from '@app/common/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'apps/customers/src/customers.entity';
import { Discounts } from './discounts.entity';

@Module({
  imports: [
    // DatabaseModule,
    TypeOrmModule.forFeature([Discounts]),TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'anas',
          database: 'robotic',
          entities: [Discounts],
          synchronize: true,
        }),
      ],
  controllers: [DiscountsController],
  providers: [DiscountsService],
})
export class DiscountsModule {}
