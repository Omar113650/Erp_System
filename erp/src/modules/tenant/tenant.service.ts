import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Tenant } from './entities/tenant.entities';
import { CreateTenantDto } from './dto/add.tenant.dto';
import { UpdateTenantDto } from './dto/update.tenant.dto';
import { CloudinaryService } from '../../infrastructure/cloudinary/cloudinary.service';
import { ApiFeatures } from '../../shared/utils/api-features';

@Injectable()
export class TenantServices {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async CreateTenant(
    createTenantDto: CreateTenantDto,
    logo?: Express.Multer.File,
  ) {
    let logoUrl: string | undefined = undefined;

    if (logo) {
      const result = await this.cloudinaryService.uploadFile(logo);
      logoUrl = result.secure_url;
    }

    const addTenant = this.tenantRepository.create({
      ...createTenantDto,
      logo: logoUrl,
    });

    return await this.tenantRepository.save(addTenant);
  }

  async GetTenant(queryParams: any) {
    const query = this.tenantRepository.createQueryBuilder('tenant');

    const features = new ApiFeatures(query, queryParams)
      .filter()
      .sort()
      .paginate();

    return await features.execute();
  }

  async GetTenantById(id: string) {
    const tenant = await this.tenantRepository.findOne({
      where: { id },
    });

    if (!tenant) {
      throw new NotFoundException(`Tenant with id ${id} not found`);
    }

    return tenant;
  }

  async DeleteTenant(id: string) {
    const tenant = await this.GetTenantById(id);

    await this.tenantRepository.remove(tenant);

    return {
      message: 'Tenant deleted successfully',
    };
  }

  async UpdateTenant(
    id: string,
    updateTenantDto: UpdateTenantDto,
    logo?: Express.Multer.File,
  ): Promise<Tenant> {
    const updateData: any = { ...updateTenantDto };

    if (logo) {
      const result = await this.cloudinaryService.uploadFile(logo);
      updateData.logo = result.secure_url;
    } else {
      delete updateData.logo;
    }

    const tenant = await this.tenantRepository.preload({
      id,
      ...updateData,
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    return await this.tenantRepository.save(tenant);
  }
}
