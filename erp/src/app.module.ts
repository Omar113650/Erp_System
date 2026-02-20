import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import jwtConfig from './config/jwt.config';
import databaseConfig from './config/DB.config';
import { AuthModule } from './modules/auth/auth.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { CloudinaryModule } from './infrastructure/cloudinary/cloudinary.module';
import { BranchModule } from './modules/branches/branch.module';
import { CustomerModule } from './modules/customers/customer.module';
import { EmailModule } from './modules/email/email.module';
// import{ChatGateway} from './chat.gateway'
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [databaseConfig, jwtConfig],
    // }),
   ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '.env',
  load: [databaseConfig, jwtConfig],
}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),

    AuthModule,
    TenantModule,
    CloudinaryModule,
    BranchModule,
    CustomerModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // ChatGateway
})
export class AppModule {}
