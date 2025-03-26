import { PrismaClient } from "@prisma/client";
import fs from "node:fs";

const prisma = new PrismaClient();

export type TGuestFamily = {
  id: number;
  lastName: string;
  family: TFamily[];
};

export type TFamily = {
  id: number;
  confirmCeremony: boolean;
  confirmParty: boolean;
  isVegan: boolean;
  person: TPerson;
  idGuestFamily: number;
};

export type TPerson = {
  firstName: string;
  secondName: string;
  firstSurname: string;
  secondSurname: string;
};

async function main() {
  const nameFileMigration = "migration.json";
  const data = JSON.parse(
    fs.readFileSync(`./data/${nameFileMigration}`, "utf8"),
  ) as TGuestFamily[];

  for (const family of data) {
    const newFamily = await prisma.guestFamily.create({
      data: {
        lastName: family.lastName,
        family: {
          create: family.family.map((guest) => ({
            confirmCeremony: guest.confirmCeremony,
            confirmParty: guest.confirmParty,
            isVegan: guest.isVegan,
            person: guest.person,
          })),
        },
      },
    });
    console.log(`Migrated: ${newFamily.lastName}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("A problem occurred during migration.", e);
    await prisma.$disconnect();
    process.exit(1);
  });
