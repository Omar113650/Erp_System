import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entities';
import { CreateBranchDto } from './dto/add-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { ApiFeatures } from '../../shared/utils/api-features';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
  ) {}

  async CreateBranch(createBranchDto: CreateBranchDto) {
    const branch = this.branchRepository.create({
      ...createBranchDto,
      tenantId: String(createBranchDto.tenantId),
    });
    return await this.branchRepository.save(branch);
  }

  async GetBranches(queryParams: any) {
    const query = this.branchRepository.createQueryBuilder('branch');
    const features = new ApiFeatures(query, queryParams)
      .filter()
      .sort()
      .paginate();

    return await features.execute();
  }

  async GetBranchById(id: string) {
    const branch = await this.branchRepository.findOne({ where: { id } });
    if (!branch) throw new NotFoundException(`Branch with id ${id} not found`);
    return branch;
  }

  async UpdateBranch(id: string, updateDto: UpdateBranchDto) {
    const branch = await this.branchRepository.preload({
      id,
      ...updateDto,
      tenantId: updateDto.tenantId ? String(updateDto.tenantId) : undefined,
    });

    if (!branch) throw new NotFoundException('Branch not found');
    return await this.branchRepository.save(branch);
  }

  async DeleteBranch(id: string) {
    const branch = await this.GetBranchById(id);
    await this.branchRepository.remove(branch);
    return { message: 'Branch deleted successfully' };
  }
}
