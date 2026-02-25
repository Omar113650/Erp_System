// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import cookieParser from 'cookie-parser';
// import { VersioningType } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// dotenv.config();
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix('api')

//   app.use(cookieParser());

//   app.enableVersioning({
//     type: VersioningType.URI, // النوع
//     defaultVersion: '1', // النسخة الافتراضية لو مش محددة
//   });

// const port = process.env.PORT || 8000;
// await app.listen(port);
// }
// bootstrap();






// import 'tsconfig-paths/register';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { VersioningType } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// dotenv.config();
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

  

//   // Global Prefix
//   app.setGlobalPrefix('api');



//   app.use(cookieParser());

//   app.enableVersioning({
//     type: VersioningType.URI, // النوع
//     defaultVersion: '1', // النسخة الافتراضية لو مش محددة
//   });

//   // PORT ديناميكي مع Vercel
//   const port = process.env.PORT || 8000;
//   await app.listen(port);
//   console.log(`Server running on http://localhost:${port}`);
// }
// bootstrap();








import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { VersioningType } from '@nestjs/common';
import { createServer, Server } from 'http';
import cookieParser from 'cookie-parser';

let server: Server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Prefix
  app.setGlobalPrefix('api');

  app.use(cookieParser());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  await app.init();

  server = createServer(app.getHttpAdapter().getInstance());
}

bootstrap();

// هنا بنصدّر default function
export default async (req, res) => {
  if (!server) {
    res.statusCode = 503;
    return res.end('Server not ready');
  }

  server.emit('request', req, res);
};






















// ✅ بعد كده:

// أي request يدخل الكنترولر، تقدر تقرأ cookies باستخدام:

// @Req() req: Request

// مثال في refreshToken:

// const refreshToken = req.cookies?.RefreshToken;

// وكمان تستخدم @Res({ passthrough: true }) للكتابة في الـ cookies بدون تعطيل الـ auto response.
