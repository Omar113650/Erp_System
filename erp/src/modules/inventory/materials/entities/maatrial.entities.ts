import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tenant } from '../../../tenant/entities/tenant.entities';
import { Branch } from '../../../branches/entities/branch.entities';
import { BaseTenantEntity } from '../../../../infrastructure/database/entities/tenant-base.entity';

@Entity('materials')
export class Material extends BaseTenantEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; 
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  unit: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  current_quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  min_quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost_per_unit: number;

  @Column({ type: 'date', nullable: true })
  expiry_date: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;
}
