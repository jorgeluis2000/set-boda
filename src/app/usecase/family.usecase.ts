import {
  FIRST_PAGE_PAGINATION,
  LIMIT_MAX_FAMILY,
} from "@myapp-utils/constants/guest.constant";
import type FamilyRepository from "@myapp-utils/repositories/family.repository";
import type {
  TAddFamilyProps,
  TAddGuestProps,
  TUpdateFamilyProps,
} from "@myapp-utils/types/family-props.type";

export default class FamilyUseCase {
  constructor(private readonly familyRepository: FamilyRepository) {}

  public async findOne(data: { id: number; nameFamily?: string }) {
    return await this.familyRepository.findOne(data);
  }

  public async finMany(data: {
    nameFamily?: string;
    limit?: number;
    page?: number;
  }) {
    const currentPage = data.page ? data.page : FIRST_PAGE_PAGINATION;
    const limitMax = data.limit ? data.limit : LIMIT_MAX_FAMILY;
    const skip = (currentPage - 1) * limitMax;
    return await this.familyRepository.finMany({ ...data, skip, limit: limitMax });
  }

  public async count(data: {
    nameFamily?: string;
  }) {
    return await this.familyRepository.count(data);
  }

  public async add(data: TAddFamilyProps) {
    return await this.familyRepository.add(data);
  }

  public async addGuest(data: TAddGuestProps) {
    return await this.familyRepository.addGuest(data);
  }

  public async update(data: TUpdateFamilyProps) {
    return await this.familyRepository.update(data);
  }
}
