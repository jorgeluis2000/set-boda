import { LOG_DB } from "@myapp-config/environments/server.env";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

try {
  prisma = new PrismaClient({
    errorFormat: "pretty",
    log:
      LOG_DB !== undefined && LOG_DB === 1
        ? [
          { emit: "stdout", level: "error" },
          { emit: "stdout", level: "info" },
          { emit: "stdout", level: "query" },
          { emit: "stdout", level: "warn" },
        ]
        : [],
  });
  console.log("💻 Now there is a connection with db 💻");
} catch (error) {
  console.log("❌ System Error on connect DB:", error);
  process.exit(1);
}

export { prisma };
