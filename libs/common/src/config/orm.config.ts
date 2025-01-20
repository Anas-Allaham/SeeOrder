// import { DataSource } from 'typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// // console.log({
// //     host: process.env.DB_HOST,
// //     port: process.env.DB_PORT,
// //     username: process.env.DB_USERNAME,
// //     password: process.env.DB_PASSWORD,
// //     database: process.env.DB_DATABASE,
// //   });
  
// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: String(process.env.DB_PASSWORD),
//   database: process.env.DB_DATABASE,
//   synchronize: false, // Always false when using migrations
//   logging: true,
//   // entities: ['dist/**/*.entity.js'], // Update paths for your entities
//   // migrations: ['dist/migrations/*.js'],
// });
