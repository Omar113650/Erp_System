import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,

} from 'typeorm';
import { Tenant } from '../../tenant/entities/tenant.entities';
import { Branch } from '../../branches/entities/branch.entities';
import { BaseTenantEntity } from '../../../infrastructure/database/entities/tenant-base.entity';
import { UserRole } from '../../../core/enums/user-role.enum';
import { Exclude } from 'class-transformer';

@Entity('users')
// export class User extends BaseTenantEntity 
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ unique: true, type: 'varchar', length: 120 })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255, select: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  is_account_verified: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true, select: false })
  otp: string | null;

  @Column({ type: 'timestamp', nullable: true })
  otp_expires_at: Date | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  reset_password_token: string | null;

  // @ManyToOne(() => Tenant)
  // @JoinColumn({ name: 'tenant_id' })
  // tenant: Tenant;

  // @ManyToOne(() => Branch)
  // @JoinColumn({ name: 'branch_id' })
  // branch: Branch;
}
