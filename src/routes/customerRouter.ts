import { customerSchema } from "./../schemas/customerSchema";
import { Router } from "express";
import * as customerController from "../controllers/customerController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";

const customerRouter = Router();

customerRouter.get("/customers", customerController.getCustomers);
customerRouter.get("/customers/:id", customerController.getCustomer);
customerRouter.get("/customers/cpf/:cpf", customerController.getCustomerByCpf);
customerRouter.post("/customers", schemaValidateMiddleware(customerSchema), customerController.createCustomer);
customerRouter.put("/customers/:id", schemaValidateMiddleware(customerSchema), customerController.updateCustomer);
customerRouter.delete("/customers/:id", customerController.deleteCustomer);

export { customerRouter };
