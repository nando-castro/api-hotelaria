import { conflictError, notFoundError } from "./../utils/errorUtils";
import * as customerRepository from "../repositories/customerRepository";
import { TypeCustomer } from "../types/customersTypes";

export async function getCustomers() {
  return await customerRepository.getCustomers();
}

export async function getCustomerById(id: number) {
  const customerExists = await customerRepository.getCustomerById(id);
  if (!customerExists) throw notFoundError("Customer not found");
  return customerExists;
}

export async function createCustomer(data: TypeCustomer) {
  const customerExists = await customerRepository.getCustomerByCpf(data.cpf);
  if (customerExists) throw conflictError("Customer already exists");
  await customerRepository.createCustomer(data);
}

export async function updateCustomer(id: number, data: TypeCustomer) {
  const customerExists = await customerRepository.getCustomerById(id);
  if (!customerExists) throw notFoundError("Customer not found");
  await customerRepository.updateCustomer(id, data);
}

export async function deleteCustomer(id: number) {
  const customerExists = await customerRepository.getCustomerById(id);
  if (!customerExists) throw notFoundError("Customer not found");
  await customerRepository.deleteCustomer(id);
}

export async function getCustomerByCpf(cpf: string) {
  const customerExists = await customerRepository.getCustomerByCpf(cpf);
  if (!customerExists) throw notFoundError("Customer not found");
  return customerExists;
}
