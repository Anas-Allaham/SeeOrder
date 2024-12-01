import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADMIN_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'admin',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
