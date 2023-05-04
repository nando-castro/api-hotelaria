export interface ICustomer {
  id?: number;
  name: string;
  email?: string;
  cpf: string;
  phone: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TypeCustomer = Omit<ICustomer, "id" | "createdAt" | "updatedAt">;
export type PartialCustomerData = Partial<TypeCustomer>;
