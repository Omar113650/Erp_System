// import { ApiProperty } from '@nestjs/swagger';
// import {
//   IsNotEmpty,
//   IsOptional,
//   IsEnum,
//   IsNumber,
//   Min,
//   IsString,
// } from '@nestjs/class-validator';
// import { OrderStatus } from '../../../../core/enums/order_status.enum';
// import { OrderType } from '../../../../core/enums/order_type.enum';

// export class CreateOrderDto {
//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   tenantId: number;

//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   branchId: number;

//   @ApiProperty({ example: 1, required: false })
//   @IsOptional()
//   @IsNumber()
//   customerId?: number;

//   @ApiProperty({ enum: OrderType, example: OrderType.DINE_IN })
//   @IsNotEmpty()
//   @IsEnum(OrderType)
//   order_type: OrderType;

//   @ApiProperty({ enum: OrderStatus, example: OrderStatus.PENDING })
//   @IsNotEmpty()
//   @IsEnum(OrderStatus)
//   status: OrderStatus;

//   @ApiProperty({ example: 200.0 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   subtotal: number;

//   @ApiProperty({ example: 20.0, required: false })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   tax_amount?: number;

//   @ApiProperty({ example: 10.0, required: false })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   discount_amount?: number;

//   @ApiProperty({ example: 210.0 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   total_amount: number;

//   @ApiProperty({ example: 50.0, required: false, default: 0 })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   paid_amount?: number;

//   @ApiProperty({ example: 'Customer requested extra napkins', required: false })
//   @IsOptional()
//   @IsString()
//   notes?: string;

//   @ApiProperty({ example: 1, required: false })
//   @IsOptional()
//   @IsNumber()
//   created_by_user_id?: number;
// }
