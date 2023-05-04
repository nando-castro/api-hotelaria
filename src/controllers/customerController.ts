import { ICustomer } from "../types/customerTypes";
import { Request, Response } from "express";
import * as customerService from "../services/customerService";

export async function getCustomers(req: Request, res: Response) {
  const customers = await customerService.getCustomers();
  res.status(200).send(customers);
}

export async function getCustomer(req: Request, res: Response) {
  const { id } = req.params;
  const customer = await customerService.getCustomerById(Number(id));
  res.status(200).send(customer);
}

export async function getCustomerByCpf(req: Request, res: Response) {
  const { cpf } = req.params;
  const customer = await customerService.getCustomerByCpf(cpf);
  res.status(200).send(customer);
}

export async function createCustomer(req: Request, res: Response) {
  const data: ICustomer = req.body;
  await customerService.createCustomer(data);
  res.sendStatus(201);
}

export async function updateCustomer(req: Request, res: Response) {
  const { id } = req.params;
  const data: ICustomer = req.body;
  await customerService.updateCustomer(Number(id), data);
  res.sendStatus(200);
}

export async function deleteCustomer(req: Request, res: Response) {
  const { id } = req.params;
  await customerService.deleteCustomer(Number(id));
  res.sendStatus(200);
}
