import { NestFactory } from '@nestjs/core';
import { RestaurentModule } from './restaurent.module';

async function bootstrap() {
  const app = await NestFactory.create(RestaurentModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
