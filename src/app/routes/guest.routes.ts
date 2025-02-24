import GuestController from "@myapp-app/controllers/guest.controller";
import GuestUseCase from "@myapp-app/usecase/guest.usecase";
import { prisma } from "@myapp-config/database/prisma-connection.database";
import GuestRepository from "@myapp-utils/repositories/guest.repository";
import { Router } from "express";

const GuestRouter = Router();

const guestRepository = new GuestRepository(prisma);
const guestUseCase = new GuestUseCase(guestRepository);
const guestController = new GuestController(guestUseCase);

GuestRouter.get("/count", guestController.countGuests.bind(guestController));
GuestRouter.post(
  "/confirm-ceremony/:id",
  guestController.confirmCeremony.bind(guestController),
);
GuestRouter.post(
  "/confirm-party/:id",
  guestController.confirmParty.bind(guestController),
);

GuestRouter.put("/:id", guestController.updateGuest.bind(guestController));
GuestRouter.delete("/:id", guestController.removeGuest.bind(guestController));

export default GuestRouter;
