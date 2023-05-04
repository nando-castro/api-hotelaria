import { ICustomer } from "../types/customerTypes";
import Joi from "joi";

export const customerSchema = Joi.object<ICustomer>({
  name: Joi.string().min(3).max(50).required(),
  cpf: Joi.string().length(11).required(),
  phone: Joi.string().length(11).required(),
  email: Joi.string().email(),
  image: Joi.string(),
});
