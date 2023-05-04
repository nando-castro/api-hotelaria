import { Customer } from "@prisma/client";

export interface ICustomer {
  id?: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TypeCustomer = Omit<ICustomer, "id" | "createdAt" | "updatedAt">;
export type PartialCustomerData = Partial<Customer>;
