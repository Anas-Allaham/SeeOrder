import { NestFactory } from '@nestjs/core';
import { RestaurentModule } from './restaurent.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap - Customer microservice');
    const app = await NestFactory.create(RestaurentModule);
  
    /* --- CORS --- */
    app.enableCors({
      origin: true,
      credentials: true,
    });
  
  
    /* --- Port --- */
    const PORT = 3005;
  
    /* --- Start the app --- */
    await app.startAllMicroservices();
    await app.listen(PORT);
  
    logger.log(`Restaurent microservice is listening on port ${PORT}`);
}
bootstrap();
