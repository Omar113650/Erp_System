import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Tenant } from '../../../tenant/entities/tenant.entities';
import { BaseEntity } from '../../../../infrastructure/database/entities/base.entity';
import { Item } from '../../item/entities/item.entities';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Tenant, (tenant) => tenant.categories)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
}
