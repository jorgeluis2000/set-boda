import { Router } from "express";
import FamilyRouter from "./family.routes";
import GuestRouter from "./guest.routes";

const AppRouter = Router();

AppRouter.use("/api/family", FamilyRouter);
AppRouter.use("/api/guest", GuestRouter);

export default AppRouter;
