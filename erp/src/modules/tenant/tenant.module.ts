import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantServices } from './tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entities';
import { User } from '../users/entities/user.entities';
import { CloudinaryModule } from '../../infrastructure/cloudinary/cloudinary.module';
import { AuthModule } from '../auth/auth.module';
import { AuthMiddleware } from '../../core/middleware/auth/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tenant, User]),
    CloudinaryModule,
    AuthModule, // ✅ مهم هنا عشان JwtService متوفر للـ Middleware
  ],
  controllers: [TenantController],
  providers: [TenantServices],
  exports: [TenantServices],
})
export class TenantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(TenantController); // ✅ forRoutes على الـ Controller مش Module
  }
}