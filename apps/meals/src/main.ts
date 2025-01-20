import { NestFactory } from '@nestjs/core';
import { MealsModule } from './meals.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap - Meals microservice');
    const app = await NestFactory.create(MealsModule);
  
    /* --- CORS --- */
    app.enableCors({
      origin: true,
      credentials: true,
    });
  
  
    /* --- Port --- */
    const PORT = 3003;
  
    /* --- Start the app --- */
    await app.startAllMicroservices();
    await app.listen(PORT);
  
    logger.log(`Meals microservice is listening on port ${PORT}`);
}
bootstrap();
