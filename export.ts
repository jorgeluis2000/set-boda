import { PrismaClient } from "@prisma/client";
import fs from "node:fs";

const prisma = new PrismaClient();

async function main() {
  console.log("🏃 Init export data...");
  const nameFileMigration = "migration.json";
  const guestFamilies = await prisma.guestFamily.findMany({
    include: { family: true }, // Incluir los Guests relacionados
  });

  console.log(`🎉 All data has been migrated successfully!! ${guestFamilies.length}`);
  fs.writeFileSync(`./data/${nameFileMigration}`, JSON.stringify(guestFamilies, null, 2));
  console.log(`📥 Data exported successfully to ${nameFileMigration}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("A problem occurred during export data.", e);
    await prisma.$disconnect();
    process.exit(1);
  });
