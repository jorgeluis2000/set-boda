import FamilyController from "@myapp-app/controllers/family.controller";
import FamilyUseCase from "@myapp-app/usecase/family.usecase";
import { prisma } from "@myapp-config/database/prisma-connection.database";
import FamilyRepository from "@myapp-utils/repositories/family.repository";
import { Router } from "express";

const FamilyRouter = Router();

const guestRepository = new FamilyRepository(prisma);
const guestUseCase = new FamilyUseCase(guestRepository);
const guestController = new FamilyController(guestUseCase);

FamilyRouter.get("/:family", guestController.getFamily.bind(guestController));
FamilyRouter.get("", guestController.getFamilies.bind(guestController));
FamilyRouter.put("/:family", guestController.update.bind(guestController));
FamilyRouter.post("", guestController.create.bind(guestController));
FamilyRouter.post("/:family", guestController.addGuest.bind(guestController));

export default FamilyRouter;
