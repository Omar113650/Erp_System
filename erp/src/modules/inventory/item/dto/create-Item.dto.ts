// import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsOptional, IsString, IsNumber, Min, Length, IsBoolean } from '@nestjs/class-validator';

// export class CreateItemDto {
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
//   categoryId?: number;

//   @ApiProperty({ example: 'Coca Cola 500ml' })
//   @IsNotEmpty()
//   @IsString()
//   @Length(2, 255)
//   name: string;

//   @ApiProperty({ example: 'SKU123', required: false })
//   @IsOptional()
//   @IsString()
//   sku?: string;

//   @ApiProperty({ example: '1234567890123', required: false })
//   @IsOptional()
//   @IsString()
//   barcode?: string;

//   @ApiProperty({ example: 'coca-cola.png', required: false })
//   @IsOptional()
//   @IsString()
//   image?: string;

//   @ApiProperty({ example: 10.00, required: false })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   cost_price?: number;

//   @ApiProperty({ example: 15.00 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   selling_price: number;

//   @ApiProperty({ example: 50, required: false, default: 0 })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   current_stock?: number;

//   @ApiProperty({ example: 5, required: false })
//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   min_stock_level?: number;

//   @ApiProperty({ example: true, required: false, default: true })
//   @IsOptional()
//   @IsBoolean()
//   is_active?: boolean;
// }
