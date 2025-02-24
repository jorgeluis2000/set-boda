import { PrismaClient } from "@prisma/client";
import { GUESTS } from "./data/db.constant";

const prisma = new PrismaClient();

async function main() {
  GUESTS.map(async (guest) => {
    const new_guest = await prisma.guestFamily.create({
      data: { ...guest },
    });
    console.log("🚀 ~ GUESTS.map ~ new_guest:", new_guest);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
