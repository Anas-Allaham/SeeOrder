import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { CustomersModule } from './customers.module';


async function bootstrap() {
	const logger = new Logger('Bootstrap - Customer microservice');
	const app = await NestFactory.create(CustomersModule);

	/* --- CORS --- */
	app.enableCors({
		origin: true,
		credentials: true,
	});


	/* --- Port --- */
	const PORT = 3001;

	/* --- Start the app --- */
	await app.startAllMicroservices();
	await app.listen(PORT);

	logger.log(`Customer microservice is listening on port ${PORT}`);
}

bootstrap();
