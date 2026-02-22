// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   JoinColumn,
//   OneToMany,
// } from 'typeorm';
// import { Tenant } from '../../../tenant/entities/tenant.entities';
// import { Branch } from '../../../branches/entities/branch.entities';
// import { Customer } from '../../../customers/entities/customer.entities';
// import { OrderItem } from '../../order_item/entities/order_item.entities';
// import { OrderStatus } from '../../../../core/enums/order_status.enum';
// import { OrderType } from '../../../../core/enums/order_type.enum';
// import { BaseTenantEntity } from '../../../../infrastructure/database/entities/tenant-base.entity';

// @Entity('orders')
// export class Order extends BaseTenantEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ type: 'enum', enum: OrderType })
//   order_type: OrderType;

//   @Column({ type: 'enum', enum: OrderStatus })
//   status: OrderStatus;

//   @Column({ type: 'decimal', precision: 10, scale: 2 })
//   subtotal: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
//   tax_amount: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
//   discount_amount: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2 })
//   total_amount: number;

//   @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
//   paid_amount: number;

//   @Column({ type: 'text', nullable: true })
//   notes: string;

//   @Column({ nullable: true })
//   created_by_user_id: number;

//   @OneToMany(() => OrderItem, (item) => item.order)
//   items: OrderItem[];

//   @ManyToOne(() => Tenant)
//   @JoinColumn({ name: 'tenant_id' })
//   tenant: Tenant;

//   @ManyToOne(() => Branch)
//   @JoinColumn({ name: 'branch_id' })
//   branch: Branch;

//   @ManyToOne(() => Customer, { nullable: true })
//   @JoinColumn({ name: 'customer_id' })
//   customer: Customer;
// }
