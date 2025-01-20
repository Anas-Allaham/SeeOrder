// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// import * as dotenv from 'dotenv';

// // Load the .env file
// dotenv.config();

// // Log environment variables to verify
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);
// console.log('DB_USERNAME:', process.env.DB_USERNAME);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_DATABASE:', process.env.DB_DATABASE);
// @Module({
//   imports: [
//     ConfigModule, // Import ConfigModule for environment variables
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         synchronize: configService.get<boolean>('DB_SYNCHRONIZE',true) ,// From .env
//         autoLoadEntities: true, // Automatically load entities
//       }),
//       inject: [ConfigService],
//     }
// ),
//   ],
//   exports: [TypeOrmModule],
// })
// export class DatabaseModule {}

console.log(44444444)