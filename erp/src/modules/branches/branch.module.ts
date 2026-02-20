import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { Branch } from './entities/branch.entities';
import { Tenant } from '../tenant/entities/tenant.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Branch, Tenant])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
