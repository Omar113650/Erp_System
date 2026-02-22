// import { ApiProperty } from '@nestjs/swagger';
// import {
//   IsNotEmpty,
//   IsNumber,
//   Min,
//   IsOptional,
//   IsString,
// } from '@nestjs/class-validator';

// export class CreateOrderItemDto {
//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   item_id: number;

//   @ApiProperty({ example: 2.5 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   quantity: number;

//   @ApiProperty({ example: 50.0 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   unit_price: number;

//   @ApiProperty({ example: 125.0 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   total_price: number;

//   @ApiProperty({ example: 'Extra sauce', required: false })
//   @IsOptional()
//   @IsString()
//   notes?: string;
// }
