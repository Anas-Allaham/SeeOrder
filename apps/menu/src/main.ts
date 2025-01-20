import { NestFactory } from '@nestjs/core';
import { MenuModule } from './menu.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap - Menu microservice');
    const app = await NestFactory.create(MenuModule);
  
    /* --- CORS --- */
    app.enableCors({
      origin: true,
      credentials: true,
    });
  
  
    /* --- Port --- */
    const PORT = 3004;
  
    /* --- Start the app --- */
    await app.startAllMicroservices();
    await app.listen(PORT);
  
    logger.log(`Menu microservice is listening on port ${PORT}`);
}
bootstrap();
