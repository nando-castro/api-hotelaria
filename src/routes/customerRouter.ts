import { Router } from "express";

const customerRouter = Router();

customerRouter.get("/customer", (req, res) => {
  res.send("Hello, World!");
});

export { customerRouter };
