import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  app.use(cookieParser());

  app.enableVersioning({
    type: VersioningType.URI, // النوع
    defaultVersion: '1', // النسخة الافتراضية لو مش محددة
  });

const port = process.env.PORT || 8000;
await app.listen(port);
}
bootstrap();




// ✅ بعد كده:

// أي request يدخل الكنترولر، تقدر تقرأ cookies باستخدام:

// @Req() req: Request

// مثال في refreshToken:

// const refreshToken = req.cookies?.RefreshToken;

// وكمان تستخدم @Res({ passthrough: true }) للكتابة في الـ cookies بدون تعطيل الـ auto response.
