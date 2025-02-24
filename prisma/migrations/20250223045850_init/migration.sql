-- CreateTable
CREATE TABLE "GuestFamily" (
    "id" SERIAL NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "GuestFamily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "confirmCeremony" BOOLEAN NOT NULL DEFAULT false,
    "confirmParty" BOOLEAN NOT NULL DEFAULT false,
    "isVegan" BOOLEAN NOT NULL DEFAULT false,
    "person" JSONB NOT NULL,
    "idGuestFamily" INTEGER NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_idGuestFamily_fkey" FOREIGN KEY ("idGuestFamily") REFERENCES "GuestFamily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
