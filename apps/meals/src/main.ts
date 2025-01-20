import { NestFactory } from '@nestjs/core';
import { MealsModule } from './meals.module';

async function bootstrap() {
  const app = await NestFactory.create(MealsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
