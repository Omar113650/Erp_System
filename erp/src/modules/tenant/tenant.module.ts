import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantServices } from './tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entities';
import { User } from '../users/entities/user.entities';
import { CloudinaryModule } from '../../infrastructure/cloudinary/cloudinary.module';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Tenant, User]),
    CloudinaryModule,
    AuthModule,
  ],
  controllers: [TenantController],
  providers: [TenantServices],
})
export class TenantModule {}


