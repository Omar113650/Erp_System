import { BaseEntity } from '../../../infrastructure/database/entities/base.entity';
import { Branch } from '../../branches/entities/branch.entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entities';
import { Category } from '../../inventory/category/entities/category.entities';
import { Item } from '../../inventory/item/entities/item.entities';
@Entity('tenants')
export class Tenant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 70 })
  password: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

  @Column({ type: 'text', nullable: true })
  logo?: string;

  @Column({ type: 'varchar', length: 3, default: 'EGP' })
  currency: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  taxRate: number;

  @OneToMany(() => User, (user) => user.tenant)
  users: User[];

  @OneToMany(() => Branch, (branch) => branch.tenant)
  branches: Branch[];

  @OneToMany(() => Category, (category) => category.tenant)
  categories: Category[];

  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
}
