import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap - Admin microservice');
    const app = await NestFactory.create(AdminModule);
  
    /* --- CORS --- */
    app.enableCors({
      origin: true,
      credentials: true,
    });
  
  
    /* --- Port --- */
    const PORT = 3006;
  
    /* --- Start the app --- */
    await app.startAllMicroservices();
    await app.listen(PORT);
  
    logger.log(`Admin microservice is listening on port ${PORT}`);
}
bootstrap();
