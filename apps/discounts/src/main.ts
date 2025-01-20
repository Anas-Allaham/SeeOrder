import { NestFactory } from '@nestjs/core';
import { DiscountsModule } from './discounts.module';

async function bootstrap() {
  const app = await NestFactory.create(DiscountsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
