import client from "../databases/database";
import { TypeCustomer } from "../types/customerTypes";

export async function getCustomers() {
  return await client.customer.findMany();
}

export async function getCustomerById(id: number) {
  return await client.customer.findUnique({
    where: {
      id,
    },
  });
}

export async function createCustomer(data: TypeCustomer) {
  return await client.customer.create({ data });
}

export async function updateCustomer(id: number, data: TypeCustomer) {
  return await client.customer.update({
    where: { id },
    data,
  });
}

export async function deleteCustomer(id: number) {
  return await client.customer.delete({ where: { id } });
}

export async function getCustomerByCpf(cpf: string) {
  return await client.customer.findFirst({
    where: { cpf },
  });
}
