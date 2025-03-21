import type { TUpdateGuestProps } from "@myapp-utils/types/guest-props.type";
import type { PrismaClient } from "@prisma/client";

export default class GuestRepository {
  constructor(private readonly connection: PrismaClient) {}

  public async updateCeremony({ id, value }: { id: number; value: boolean }) {
    const result = await this.connection.guest.update({
      where: {
        id,
      },
      data: {
        confirmCeremony: value,
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

  public async updateParty({ id, value }: { id: number; value: boolean }) {
    const result = await this.connection.guest.update({
      where: {
        id,
      },
      data: {
        confirmParty: value,
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

  public async update({
    id,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    confirmCeremony,
    confirmParty,
  }: TUpdateGuestProps) {
    const result = await this.connection.guest.update({
      where: {
        id,
      },
      data: {
        confirmCeremony,
        confirmParty,
        person: {
          firstName,
          secondName,
          firstSurname,
          secondSurname,
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

  public async delete(id: number) {
    const result = await this.connection.guest.delete({
      where: {
        id,
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

  public async count({
    nameFamily,
  }: {
    nameFamily?: string;
  }) {
    const result = await this.connection.guest.count({
      where: {
        person: {
          string_contains: nameFamily && nameFamily !== "" ? nameFamily : undefined,
          mode: "insensitive",
        },
      },
    });
    return result;
  }

  public async countConfirmCeremony() {
    const confirm = await this.connection.guest.count({
      where: {
        confirmCeremony: true,
      },
    });
    const unConfirm = await this.connection.guest.count({
      where: {
        confirmCeremony: false,
      },
    });
    return {
      confirm,
      unConfirm,
    };
  }

  public async countConfirmParty() {
    const confirm = await this.connection.guest.count({
      where: {
        confirmParty: true,
      },
    });
    const unConfirm = await this.connection.guest.count({
      where: {
        confirmParty: false,
      },
    });
    return {
      confirm,
      unConfirm,
    };
  }

  public async finMany({
    nameFamily,
    limit,
    skip,
  }: { nameFamily?: string; limit: number; skip: number }) {
    const result = await this.connection.guest.findMany({
      where: {
        person: {
          string_contains: nameFamily && nameFamily !== "" ? nameFamily : undefined,
          mode: "insensitive",
        },
      },
      skip,
      take: limit,
      select: {
        id: true,
        confirmCeremony: true,
        confirmParty: true,
        person: true,
        guestFamily: {
          select: {
            id: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

    return result;
  }
}
