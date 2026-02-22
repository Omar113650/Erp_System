// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   JoinColumn,
//   BaseEntity,
// } from 'typeorm';
// import { Tenant } from '../../../tenant/entities/tenant.entities';
// import { Branch } from '../../../branches/entities/branch.entities';
// import { Category } from '../../category/entities/category.entities';
// import { BaseTenantEntity } from '../../../../infrastructure/database/entities/tenant-base.entity';

// @Entity('items')
// export class Item extends BaseTenantEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column({ nullable: true })
//   sku: string;

//   @Column({ nullable: true })
//   barcode: string;

//   @Column({ nullable: true })
//   image: string;

//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
//   cost_price: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2 })
//   selling_price: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
//   current_stock: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
//   min_stock_level: number;

//   @Column({ default: true })
//   is_active: boolean;

//   @ManyToOne(() => Tenant)
//   @JoinColumn({ name: 'tenant_id' })
//   tenant: Tenant;

//   @ManyToOne(() => Branch)
//   @JoinColumn({ name: 'branch_id' })
//   branch: Branch;

//   @ManyToOne(() => Category, { nullable: true })
//   @JoinColumn({ name: 'category_id' })
//   category: Category;
// }
