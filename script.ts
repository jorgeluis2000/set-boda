import { PrismaClient } from "@prisma/client";
import { GUESTS } from "./data/db.constant";

const prisma = new PrismaClient();

async function main() {
  GUESTS.map(async (guest) => {
    try {
      const new_guest = await prisma.guestFamily.create({
        data: { ...guest },
      });
      console.log("🚀 new_guest:", new_guest);
    } catch (error) {
      if (error instanceof Error) {
        console.log("❌ error:", error.message);
      }
    }
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
