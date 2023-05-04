import { Router } from "express";
import { customerRouter } from "./customerRouter";

const router = Router();

router.use(customerRouter);

export default router;
