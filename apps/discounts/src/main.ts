import { NestFactory } from '@nestjs/core';
import { DiscountsModule } from './discounts.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap - Discount microservice');
    const app = await NestFactory.create(DiscountsModule);
  
    /* --- CORS --- */
    app.enableCors({
      origin: true,
      credentials: true,
    });
  
  
    /* --- Port --- */
    const PORT = 3002;
  
    /* --- Start the app --- */
    await app.startAllMicroservices();
    await app.listen(PORT);
  
    logger.log(`Discount microservice is listening on port ${PORT}`);
}
bootstrap();
