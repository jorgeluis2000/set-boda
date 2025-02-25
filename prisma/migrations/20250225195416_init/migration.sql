-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_idGuestFamily_fkey";

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_idGuestFamily_fkey" FOREIGN KEY ("idGuestFamily") REFERENCES "GuestFamily"("id") ON DELETE CASCADE ON UPDATE CASCADE;
