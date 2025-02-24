/*
  Warnings:

  - A unique constraint covering the columns `[lastName]` on the table `GuestFamily` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GuestFamily_lastName_key" ON "GuestFamily"("lastName");
