import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/add-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post('create-branch')
  async create(@Body() body: CreateBranchDto) {
    return await this.branchService.CreateBranch(body);
  }

  @Get()
  async getAll(@Query() query: any) {
    return await this.branchService.GetBranches(query);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.branchService.GetBranchById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateBranchDto,
  ) {
    return await this.branchService.UpdateBranch(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.branchService.DeleteBranch(id);
  }
}
