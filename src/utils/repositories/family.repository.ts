import type {
  TAddFamilyProps,
  TAddGuestProps,
  TUpdateFamilyProps,
} from "@myapp-utils/types/family-props.type";
import type { PrismaClient } from "@prisma/client";

export default class FamilyRepository {
  constructor(private readonly connection: PrismaClient) {}

  public async findOne({ id, nameFamily }: { id: number; nameFamily?: string }) {
    const result = await this.connection.guestFamily.findFirst({
      where: {
        id,
        lastName: {
          contains: nameFamily && nameFamily !== "" ? nameFamily : undefined,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        lastName: true,
        family: {
          orderBy: {
            id: "asc",
          },
          select: {
            id: true,
            confirmCeremony: true,
            confirmParty: true,
            person: true,
          },
        },
      },
    });

    return result;
  }

  public async finMany({
    nameFamily,
    limit,
    skip,
  }: { nameFamily?: string; limit: number; skip: number }) {
    const result = await this.connection.guestFamily.findMany({
      where: {
        lastName: {
          contains: nameFamily && nameFamily !== "" ? nameFamily : undefined,
          mode: "insensitive",
        },
      },
      skip,
      take: limit,
      select: {
        id: true,
        lastName: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return result;
  }

  public async count({ nameFamily }: { nameFamily?: string }) {
    const result = await this.connection.guestFamily.count({
      where: {
        lastName: {
          contains: nameFamily && nameFamily !== "" ? nameFamily : undefined,
          mode: "insensitive",
        },
      },
    });

    return result;
  }

  public async add({ lastName }: TAddFamilyProps) {
    const result = await this.connection.guestFamily.create({
      data: {
        lastName,
      },
    });
    return result;
  }

  public async addGuest({
    family,
    firstName,
    firstSurname,
    secondName,
    secondSurname,
  }: TAddGuestProps) {
    const result = await this.connection.guest.create({
      data: {
        person: {
          firstName,
          firstSurname,
          secondName,
          secondSurname,
        },
        guestFamily: {
          connect: {
            id: family,
          },
        },
      },
      select: {
        id: true,
        person: true,
        confirmCeremony: true,
        confirmParty: true,
      },
    });
    return result;
  }

  public async update({ id, lastName }: TUpdateFamilyProps) {
    const result = await this.connection.guestFamily.update({
      where: {
        id,
      },
      data: {
        lastName,
      },
    });
    return result;
  }
}
