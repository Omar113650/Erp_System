import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  UploadedFile,
  UseInterceptors,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { TenantServices } from './tenant.service';
import { CreateTenantDto } from './dto/add.tenant.dto';
import { UpdateTenantDto } from './dto/update.tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantServices: TenantServices) {}

  @Post('create-tenant')
  @UseInterceptors(FileInterceptor('logo'))
  async create(
    @Body() body: CreateTenantDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return await this.tenantServices.CreateTenant(body, file);
  }

  @Get()
  async getAll(@Query() query: any) {
    return await this.tenantServices.GetTenant(query);
  }

  // Get Tenant By Id
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.tenantServices.GetTenantById(id);
  }

  // Update Tenant
  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateTenantDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return await this.tenantServices.UpdateTenant(id, body, file);
  }

  // Delete Tenant
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.tenantServices.DeleteTenant(id);
  }
}
