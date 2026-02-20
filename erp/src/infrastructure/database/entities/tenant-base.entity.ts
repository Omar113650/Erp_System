import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class BaseTenantEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  tenantId: string;
}
