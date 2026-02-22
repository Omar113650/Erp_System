// import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsOptional, IsString, IsNumber, Min, IsDateString } from '@nestjs/class-validator';

// export class CreateExpenseDto {
//   @ApiProperty({ example: 1 })
//   @IsNotEmpty()
//   @IsNumber()
//   tenantId: number;

//   @ApiProperty({ example: 1, required: false })
//   @IsOptional()
//   @IsNumber()
//   branchId?: number;

//   @ApiProperty({ example: 'Office rent for February', required: false })
//   @IsOptional()
//   @IsString()
//   description?: string;

//   @ApiProperty({ example: 5000.00 })
//   @IsNotEmpty()
//   @IsNumber()
//   @Min(0)
//   amount: number;

//   @ApiProperty({ example: '2026-02-07', required: false })
//   @IsOptional()
//   @IsDateString()
//   expense_date?: string;

//   @ApiProperty({ example: 1, required: false })
//   @IsOptional()
//   @IsNumber()
//   created_by_user_id?: number;
// }
