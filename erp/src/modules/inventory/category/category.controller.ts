import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
  ValidationPipe,
  Req,
} from '@nestjs/common';

import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from '../../../core/decorators/roles.decorator';
import { RolesGuard } from '../../../core/guards/roles.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

//   @Post('create')
//   @Roles('tenant_owner', 'super_admin')
//   @UseGuards(RolesGuard)
  @Post('create-category')
  @Roles('tenant_owner', 'super_admin')
  @UseGuards(RolesGuard)
  async create(
    @Body(new ValidationPipe({ whitelist: true })) body: CreateCategoryDto,
    @Req() req: any, // هنا هنجيب request مباشرة
  ) {
    const tenantId = req.user.tenantId; // tenantId من JWT
    return this.categoryService.AddCategory(body, tenantId);
  }

  @Get('get-all')
  @Roles('tenant_owner', 'super_admin')
  @UseGuards(RolesGuard)
  async getAll(@Query() query: any) {
    return this.categoryService.GetCategory(query);
  }

  @Get(':id')
  @Roles('tenant_owner', 'super_admin')
  @UseGuards(RolesGuard)
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoryService.GetCategoryById(id);
  }

  @Patch('update/:id')
  @Roles('tenant_owner', 'super_admin')
  @UseGuards(RolesGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe({ whitelist: true }))
    body: Partial<CreateCategoryDto>,
  ) {
    return this.categoryService.UpdateCategory(id, body);
  }

  @Delete('delete/:id')
  @Roles('tenant_owner', 'super_admin')
  @UseGuards(RolesGuard)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoryService.DeleteCategory(id);
  }
}
